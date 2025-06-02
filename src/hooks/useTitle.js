import { useEffect } from "react";
import { titleMap } from "../config/constants";

export function useTitle(pathname) {
  useEffect(() => {
    const title = titleMap[pathname];
    window.document.title = title;
  }, [pathname]);
}
