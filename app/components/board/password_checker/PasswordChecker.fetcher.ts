import { useFetcher } from "@remix-run/react";
import _ from "lodash";
import { useEffect } from "react";

export const usePasswordCheckerFetcher = (label: string, onPwCheckPassed: () => void) => {
    const pwCheckFetcher = useFetcher<boolean>();

    const handelPasswordInput = _.debounce(
        (post_id: number, password: string) => {
        sendPwCheckRequest(post_id, password);
        },
        200
    );

    const sendPwCheckRequest = (post_id: number, password: string) => {
        pwCheckFetcher.submit(
        {
            password: password,
        },
        {
            action: `/board/${post_id}/check_pw/`,
            method: "POST",
        }
        );
    };

    const handlePasswordCheckPass = () => {
        onPwCheckPassed();
    };

    const loading: boolean = pwCheckFetcher.state !== "idle";
    let isPasswordCheckFailed: boolean = pwCheckFetcher.data === false;
    const defaultLabel: string = `${label} 비밀번호를 입력해 주세요.`;

    useEffect(() => {
        // 반드시 false or true여야 하며 false는 아무 falsy한 값으로 대체해선 안 됨. (초기값이 undefined)
        if (pwCheckFetcher.data === true) {
        handlePasswordCheckPass();
        }
    }, [pwCheckFetcher.data]);

    const getPasswordInputLabel = (): string => {
        if (loading) {
        return "비밀번호 확인 중...";
        }
        switch (pwCheckFetcher.data) {
        /* 빨간 테두리 적용보다 느리다. */
        case false:
            return "비밀번호가 일치하지 않습니다.";
        }
        return defaultLabel;
    };

    return {
        loading, 
        isPasswordCheckFailed,
        handelPasswordInput,
        getPasswordInputLabel
    };    
};
