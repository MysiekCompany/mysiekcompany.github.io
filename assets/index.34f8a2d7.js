const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};a();const i=document.getElementById("hero-text"),r=document.getElementById("navbar");document.addEventListener("scroll",()=>{document.scrollingElement===null||i===null||r===null||(document.scrollingElement.scrollTop>=i.offsetTop-150?r.classList.remove("after:lg:bg-transparent"):r.classList.add("after:lg:bg-transparent"))});const u=document.getElementById("menu-toggle"),l=document.getElementById("menu"),m=document.querySelectorAll("ul.navList > li");if(u instanceof HTMLButtonElement&&l!==null){u.addEventListener("click",()=>{l.classList.toggle("menu-hidden")});for(const s of m)s.addEventListener("click",()=>{l.classList.add("menu-hidden")})}
