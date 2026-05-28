/** Whether a nav item should appear active for the current route / hash. */
export function isNavLinkActive(
  pathname: string,
  hash: string,
  href: string,
): boolean {
  const hashIndex = href.indexOf("#");

  if (hashIndex !== -1) {
    const path = href.slice(0, hashIndex) || "/";
    const itemHash = href.slice(hashIndex);
    const onTargetPage = path === "/" ? pathname === "/" : pathname === path;

    return onTargetPage && hash === itemHash;
  }

  if (href === "/") {
    return pathname === "/" && !hash;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
