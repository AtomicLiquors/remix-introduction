import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  NavLink,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
  useLocation,
  MetaFunction,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import tailwindStylesheet from "./tailwind.css?url";
import themeStylesheet from "./theme/theme.css?url";
import fontStylesheet from "./font.css?url";
import appStylesHref from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";
import { useEffect, useState } from "react";
import { applyExistingTheme, themeClasses } from "./theme/theme";
import Center from "@/common/components/atoms/Center";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Profile from "./common/profile/Profile";

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export const meta: MetaFunction = () => {
  return [
    { title: "최효빈 | Front-End Developer" },
    { name: "프론트엔드 웹 개발자 최효빈의 자기소개 페이지입니다." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheet },
  { rel: "stylesheet", href: themeStylesheet },
  { rel: "stylesheet", href: fontStylesheet },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};

export default function App() {
  const checkError = () => {
    const error = sessionStorage.getItem("error");
    error && setErrorMsg(error);
    setTimeout(() => sessionStorage.removeItem("error"), 3000);
  };

  useEffect(() => {
    applyExistingTheme();
    checkError();
  }, []);

  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  // This hook provides information about a 'pending' page navigation.
  const submit = useSubmit();
  const location = useLocation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [popupVisibility, setPopupVisibility] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`${themeClasses.bg.empty} min-h-screen`}>
        {/* location.pathname !== "/" && <인덱스 외부에서 표시할 컴포넌트>*/}

        {errorMsg && <Center className="bg-red-200">{errorMsg}</Center>}
        <div
          className={`${
            navigation.state === "loading" && !searching ? "loading" : ""
          } relative`}
          id="detail"
        >
          {popupVisibility && (
            <div
              id="popup_background"
              className="absolute w-full h-full bg-gray-500/50 backdrop-blur"
              onClick={() => setPopupVisibility(false)}
            ></div>
          )}

          <Profile />
          <div className="flex justify-center gap-5">
          <NavLink
            preventScrollReset={true}
            to="."
            className={({ isActive, isPending }) =>
              isPending ? "text-gray-200" : isActive ? "text-blue-500" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            preventScrollReset={true}
            to="board"
            className={({ isActive, isPending }) =>
              isPending ? "text-gray-200" : isActive ? "text-blue-500" : ""
            }
          >
            Board
          </NavLink>
        </div>

          <ScrollRestoration />
          <Outlet />
          {/* To-Do: 테마 변경시 버튼에 애니메이션 적용 */}
          <Center flex flexCol className="gap-5 mb-20">
            {/*
            <div className="flex gap-5">
              <Button onClick={clearTheme} text="default" />
              <button
                onClick={() => switchTheme(THEMES.DARK)}
                className={themeClasses.text.secondary}
              >
                toggle dark
              </button>
              <button
                onClick={() => switchTheme(THEMES.PINK)}
                className={themeClasses.text.secondary}
              >
                toggle pink
              </button>
            </div>
            */}
            <a
              href="https://github.com/AtomicLiquors/remix-introduction/issues"
              target="_blank"
              className="flex gap-3 p-5"
            >
              <FontAwesomeIcon className="w-12" icon={faGithub} />
              <div>
                <p className="font-bold text-lg">
                  방문 중에 불편이 있으셨나요?
                </p>
                <p className="text-sm">
                  Github 저장소에서 Issue를 통해 제보해주세요!
                </p>
              </div>
            </a>
            <div className="text-sm text-gray-400">
              ⓒ 2024 Hyobin Choe, AtomicLiquors All Rights Reserved.
            </div>
          </Center>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
