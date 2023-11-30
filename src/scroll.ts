class ScrollSpy {
  id: string;
  tag: HTMLElement;
  element: HTMLElement;

  constructor(id: string, tag: HTMLElement, element: HTMLElement) {
    this.id = id;
    this.tag = tag;
    this.element = element;
  }
}

const heroText = document.querySelector<HTMLElement>("#hero-text");
const navbar = document.querySelector<HTMLElement>("#navbar");

const scrollSpyTags = document.querySelectorAll<HTMLElement>("*[scrollspy-id]");
const scrollSpies: ScrollSpy[] = [];

scrollSpyTags.forEach((tag) => {
  const scrollSpyId = tag.attributes.getNamedItem("scrollspy-id")?.value;
  if (scrollSpyId === undefined) return;

  const element = document.querySelector<HTMLElement>(`#${scrollSpyId}`);
  if (element === null) return;

  scrollSpies.push(new ScrollSpy(scrollSpyId, tag, element));
});

document.addEventListener("scroll", () => {
  if (document.scrollingElement!.scrollTop >= heroText!.offsetTop - 150) {
    navbar?.classList.remove("after:lg:bg-transparent");
  } else {
    navbar?.classList.add("after:lg:bg-transparent");
  }

  scrollSpies.forEach((scrollSpy, i) => {
    if (
      document.scrollingElement!.scrollTop + 60 >=
      scrollSpy.element.offsetTop
    ) {
      scrollSpy.tag.classList.add("active");
      if (i > 0) scrollSpies[i - 1].tag.classList.remove("active");
    } else scrollSpy.tag.classList.remove("active");
  });
});

export {};
