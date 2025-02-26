import { getBoardById } from "@/model/board/board.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

export const loader:LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
    //To - Do
    // 1. 작동확인
    // 2. 에러처리 : 존재하지 않는 아이디 -> 둘 다 상태 코드는 200이고, rowCount가 0과 1로 서로 다르다.
    // 3. 에러처리 : DB 통신 실패
    // 4. 타입확인
    // 5. 500 서버 에러 : TypeError: Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".
    
    // postId 확인에 Invariant가 사용된다. invariant의 역할은?
    const postId = params.postId;
    
    if(!postId){
      console.log(params);
      return false;
      // throw Error로 변경.
    }

    const data = await getBoardById(+postId);
  
    return data.rows[0] || null;
  };
  