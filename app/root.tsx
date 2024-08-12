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
} from "@remix-run/react";
import type { 
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import tailwindStylesheet from "./tailwind.css?url";
import themeStylesheet from "./theme/theme.css?url";
import fontStylesheet from "./font.css?url";
import appStylesHref from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";
import { useEffect, useState } from "react";
import { applyExistingTheme, clearTheme, switchTheme, THEMES, themeClasses } from "./theme/theme";
import Button from "./common/components/atoms/Button";

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheet },
  { rel: "stylesheet", href: themeStylesheet },
  { rel: "stylesheet", href: fontStylesheet },
];

export const loader = async ({request,} : LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};


/*
 * /app/root.tsx
 * "Root Route" : the first component in the UI that render.
 * typically contains the global layout for the page.
 */

// To-Do : sessionStorage 이용해서 404 에러 정보 전달하기
export default function App() {
  
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  // This hook provides information about a 'pending' page navigation.
  const submit = useSubmit();
  const location = useLocation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );  

  useEffect(() => {
    applyExistingTheme();
  }, []);

  useEffect(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);

  const [ popupVisibility, setPopupVisibility ] = useState(false);

  return ( 
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={themeClasses.bg.empty}>  
        {/* location.pathname !== "/" && <인덱스 외부에서 표시할 컴포넌트>*/}
        
        <div
          className={
            `${navigation.state === "loading" && !searching ? "loading" : ""} relative`
          }
          id="detail"
        >
          { popupVisibility && <div id="popup_background" className="absolute w-full h-full bg-gray-500/50 backdrop-blur" onClick={() => setPopupVisibility(false)}></div>}
          <Outlet />
          {/* To-Do: 테마 변경시 버튼에 애니메이션 적용 */}
          <Button onClick={clearTheme} text="default"/>
          <button onClick={() => switchTheme(THEMES.DARK)} className={themeClasses.text.secondary}>toggle dark</button>
          <button onClick={() => switchTheme(THEMES.PINK)} className={themeClasses.text.secondary}>toggle pink</button>
          
        </div>
        <ScrollRestoration /> 
        <Scripts />
      </body>
    </html>
  );
}