const statisticsSvg = `
<g id="ph:chart-bar-fill">
<path id="Vector" d="M21.375 18.75H20.625V3.75C20.625 3.55109 20.546 3.36032 20.4053 3.21967C20.2647 3.07902 20.0739 3 19.875 3H14.625C14.4261 3 14.2353 3.07902 14.0947 3.21967C13.954 3.36032 13.875 3.55109 13.875 3.75V7.5H9.375C9.17609 7.5 8.98532 7.57902 8.84467 7.71967C8.70402 7.86032 8.625 8.05109 8.625 8.25V12H4.125C3.92609 12 3.73532 12.079 3.59467 12.2197C3.45402 12.3603 3.375 12.5511 3.375 12.75V18.75H2.625C2.42609 18.75 2.23532 18.829 2.09467 18.9697C1.95402 19.1103 1.875 19.3011 1.875 19.5C1.875 19.6989 1.95402 19.8897 2.09467 20.0303C2.23532 20.171 2.42609 20.25 2.625 20.25H21.375C21.5739 20.25 21.7647 20.171 21.9053 20.0303C22.046 19.8897 22.125 19.6989 22.125 19.5C22.125 19.3011 22.046 19.1103 21.9053 18.9697C21.7647 18.829 21.5739 18.75 21.375 18.75ZM10.125 9H13.875V18.75H10.125V9ZM4.875 13.5H8.625V18.75H4.875V13.5Z" fill="#471515"/>
</g>

`;
const pereferncesSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2656 9.77808C22.2423 9.67324 22.1968 9.57462 22.1321 9.4889C22.0674 9.40317 21.985 9.33235 21.8906 9.2812L19.6593 8.0437C19.5397 7.80117 19.4051 7.56633 19.2562 7.34058L19.3031 4.79058C19.3039 4.68362 19.2827 4.57764 19.2408 4.47924C19.1989 4.38085 19.1371 4.29215 19.0593 4.2187C17.9484 3.21142 16.6345 2.4538 15.2062 1.99683C15.1036 1.96484 14.9954 1.95499 14.8888 1.96792C14.7821 1.98085 14.6794 2.01626 14.5875 2.07183L12.4031 3.38433C12.1312 3.37495 11.8687 3.37495 11.5968 3.38433L9.41245 2.07183C9.32049 2.01626 9.21779 1.98085 9.11112 1.96792C9.00446 1.95499 8.89627 1.96484 8.7937 1.99683C7.36351 2.45415 6.04911 3.21529 4.94057 4.22808C4.86214 4.299 4.79981 4.3859 4.75777 4.48292C4.71572 4.57995 4.69494 4.68485 4.69682 4.79058L4.7437 7.34058C4.5937 7.56558 4.46245 7.79995 4.3312 8.0437L2.09995 9.2812C2.00688 9.33288 1.92604 9.40402 1.86294 9.48976C1.79985 9.57551 1.75598 9.67385 1.73432 9.77808C1.41554 11.2422 1.41554 12.7577 1.73432 14.2218C1.75761 14.3267 1.80314 14.4253 1.86784 14.511C1.93254 14.5967 2.01489 14.6676 2.10932 14.7187L4.34057 15.9562C4.46019 16.1987 4.59482 16.4336 4.7437 16.6593L4.69682 19.2093C4.69597 19.3163 4.71717 19.4223 4.75911 19.5207C4.80105 19.6191 4.86282 19.7078 4.94057 19.7812C6.05155 20.7885 7.3654 21.5461 8.7937 22.0031C8.89627 22.0351 9.00446 22.0449 9.11112 22.032C9.21779 22.0191 9.32049 21.9836 9.41245 21.9281L11.5968 20.6156H12.4031L14.5968 21.9281C14.7109 22.0031 14.8447 22.0422 14.9812 22.0406C15.0574 22.0373 15.133 22.0247 15.2062 22.0031C16.6364 21.5458 17.9508 20.7846 19.0593 19.7718C19.1378 19.7009 19.2001 19.614 19.2421 19.517C19.2842 19.42 19.305 19.3151 19.3031 19.2093L19.2562 16.6593C19.4062 16.4343 19.5375 16.2 19.6687 15.9562L21.9 14.7187C21.993 14.667 22.0739 14.5959 22.137 14.5101C22.2001 14.4244 22.2439 14.3261 22.2656 14.2218C22.5844 12.7577 22.5844 11.2422 22.2656 9.77808ZM12 16.125C11.1841 16.125 10.3866 15.883 9.70822 15.4298C9.02987 14.9765 8.50116 14.3323 8.18895 13.5785C7.87674 12.8248 7.79505 11.9954 7.95421 11.1952C8.11337 10.395 8.50624 9.66003 9.08313 9.08314C9.66003 8.50625 10.395 8.11338 11.1952 7.95421C11.9954 7.79505 12.8248 7.87674 13.5785 8.18895C14.3323 8.50116 14.9765 9.02987 15.4298 9.70823C15.883 10.3866 16.125 11.1841 16.125 12C16.125 13.094 15.6904 14.1432 14.9168 14.9168C14.1432 15.6904 13.094 16.125 12 16.125Z" fill="#471515"/>
</svg>
`

const shortcutSvg =`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75V3.75ZM17.25 12.75C17.25 12.9489 17.171 13.1397 17.0303 13.2803C16.8897 13.421 16.6989 13.5 16.5 13.5H9.30938L10.2844 14.4656C10.4252 14.6078 10.5042 14.7999 10.5042 15C10.5042 15.2001 10.4252 15.3922 10.2844 15.5344C10.141 15.673 9.94941 15.7505 9.75 15.7505C9.55059 15.7505 9.35898 15.673 9.21563 15.5344L6.96563 13.2844C6.82479 13.1422 6.74578 12.9501 6.74578 12.75C6.74578 12.5499 6.82479 12.3578 6.96563 12.2156L9.21563 9.96563C9.36135 9.84603 9.54634 9.78491 9.73463 9.79416C9.92292 9.8034 10.101 9.88236 10.2343 10.0157C10.3676 10.149 10.4466 10.3271 10.4558 10.5154C10.4651 10.7037 10.404 10.8887 10.2844 11.0344L9.30938 12H15.75V9.75C15.75 9.55109 15.829 9.36032 15.9697 9.21967C16.1103 9.07902 16.3011 9 16.5 9C16.6989 9 16.8897 9.07902 17.0303 9.21967C17.171 9.36032 17.25 9.55109 17.25 9.75V12.75Z" fill="#471515"/>
</svg>
`
const ctrlS = `
<svg width="55" height="14" viewBox="0 0 55 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" clip-path="url(#clip0_171_2086)">
<path d="M4.67383 6.99219V6.47656C4.67383 5.16016 5.01758 4.13477 5.70508 3.40039C6.39258 2.66211 7.25391 2.29297 8.28906 2.29297C9.32812 2.29297 10.1348 2.57227 10.709 3.13086C11.2832 3.68945 11.584 4.36328 11.6113 5.15234V5.21094H10.4629V5.15234C10.4473 4.63672 10.2617 4.19727 9.90625 3.83398C9.55469 3.4668 9.01562 3.2832 8.28906 3.2832C7.57812 3.2832 6.99023 3.55273 6.52539 4.0918C6.06445 4.62695 5.83398 5.42188 5.83398 6.47656V6.99219C5.83398 7.98828 6.06445 8.76953 6.52539 9.33594C6.98633 9.90234 7.57422 10.1855 8.28906 10.1855C8.98828 10.1855 9.51172 10.002 9.85938 9.63477C10.207 9.26367 10.4062 8.82422 10.457 8.31641L10.4629 8.25781H11.6113L11.6055 8.31641C11.5273 9.10156 11.2148 9.77539 10.668 10.3379C10.1211 10.8965 9.32812 11.1758 8.28906 11.1758C7.25391 11.1758 6.39258 10.8086 5.70508 10.0742C5.01758 9.33594 4.67383 8.30859 4.67383 6.99219ZM12.2711 5.62109V4.76562H15.8805V5.62109H12.2711ZM13.402 9.45312V5.28125V5.10547V3.3125H14.5152V9.45312C14.5152 9.72656 14.5699 9.92188 14.6793 10.0391C14.7926 10.1562 14.9703 10.2148 15.2125 10.2148C15.3219 10.2148 15.4293 10.2031 15.5348 10.1797C15.6441 10.1562 15.7555 10.125 15.8687 10.0859V11C15.7633 11.0469 15.6266 11.0879 15.4586 11.123C15.2945 11.1582 15.1129 11.1758 14.9137 11.1758C14.4527 11.1758 14.0855 11.0371 13.8121 10.7598C13.5387 10.4824 13.402 10.0469 13.402 9.45312ZM17.1906 11V4.76562H18.1984L18.2453 5.56836H18.2805C18.4406 5.30664 18.6516 5.07812 18.9133 4.88281C19.1789 4.6875 19.4934 4.58984 19.8566 4.58984C19.9426 4.58984 20.0324 4.59961 20.1262 4.61914C20.2238 4.63867 20.2922 4.65625 20.3313 4.67188V5.70898C20.2531 5.69336 20.1691 5.68164 20.0793 5.67383C19.9934 5.66602 19.8977 5.66211 19.7922 5.66211C19.4289 5.66211 19.1203 5.75586 18.8664 5.94336C18.6125 6.13086 18.425 6.36133 18.3039 6.63477V11H17.1906ZM21.5711 11V2H22.6844V11H21.5711Z" fill="#471515"/>
<rect x="0.5" y="0.5" width="27" height="13" rx="3.5" stroke="#471515"/>
<path d="M36.3047 6.42383V7.44336H30.457V6.42383H36.3047ZM33.9258 3.93359V10.1445H32.8418V3.93359H33.9258Z" fill="#471515"/>
<path d="M43.5273 8.65625V8.58594H44.6758V8.65625C44.6758 9.16797 44.8535 9.55273 45.209 9.81055C45.5645 10.0645 46.0605 10.1914 46.6973 10.1914C47.3379 10.1914 47.8262 10.0605 48.1621 9.79883C48.502 9.5332 48.6719 9.18945 48.6719 8.76758C48.6719 8.38086 48.5117 8.07227 48.1914 7.8418C47.8711 7.60742 47.2441 7.36328 46.3105 7.10938C45.3574 6.84375 44.6836 6.53125 44.2891 6.17188C43.8984 5.80859 43.7031 5.29297 43.7031 4.625C43.7031 3.95703 43.9629 3.40234 44.4824 2.96094C45.002 2.51562 45.7207 2.29297 46.6387 2.29297C47.5566 2.29297 48.2871 2.5293 48.8301 3.00195C49.373 3.47461 49.6445 4.06641 49.6445 4.77734V4.84766H48.4961V4.77734C48.4961 4.32812 48.3398 3.9668 48.0273 3.69336C47.7188 3.41602 47.2559 3.27734 46.6387 3.27734C46.0254 3.27734 45.5723 3.39648 45.2793 3.63477C44.9902 3.86914 44.8457 4.18164 44.8457 4.57227C44.8457 4.94727 44.9941 5.24219 45.291 5.45703C45.5879 5.67188 46.1875 5.90234 47.0898 6.14844C48.0352 6.40234 48.7246 6.72461 49.1582 7.11523C49.5957 7.50586 49.8145 8.05469 49.8145 8.76172C49.8145 9.46875 49.5332 10.0488 48.9707 10.502C48.4121 10.9512 47.6543 11.1758 46.6973 11.1758C45.7402 11.1758 44.9727 10.9512 44.3945 10.502C43.8164 10.0488 43.5273 9.43359 43.5273 8.65625Z" fill="#471515"/>
<rect x="39.5" y="0.5" width="15" height="13" rx="3.5" stroke="#471515"/>
</g>
<defs>
<clipPath id="clip0_171_2086">
<rect width="55" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`

const ctrlP = `
<svg width="55" height="14" viewBox="0 0 55 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" clip-path="url(#clip0_171_927)">
<path d="M4.67383 6.99219V6.47656C4.67383 5.16016 5.01758 4.13477 5.70508 3.40039C6.39258 2.66211 7.25391 2.29297 8.28906 2.29297C9.32812 2.29297 10.1348 2.57227 10.709 3.13086C11.2832 3.68945 11.584 4.36328 11.6113 5.15234V5.21094H10.4629V5.15234C10.4473 4.63672 10.2617 4.19727 9.90625 3.83398C9.55469 3.4668 9.01562 3.2832 8.28906 3.2832C7.57812 3.2832 6.99023 3.55273 6.52539 4.0918C6.06445 4.62695 5.83398 5.42188 5.83398 6.47656V6.99219C5.83398 7.98828 6.06445 8.76953 6.52539 9.33594C6.98633 9.90234 7.57422 10.1855 8.28906 10.1855C8.98828 10.1855 9.51172 10.002 9.85938 9.63477C10.207 9.26367 10.4062 8.82422 10.457 8.31641L10.4629 8.25781H11.6113L11.6055 8.31641C11.5273 9.10156 11.2148 9.77539 10.668 10.3379C10.1211 10.8965 9.32812 11.1758 8.28906 11.1758C7.25391 11.1758 6.39258 10.8086 5.70508 10.0742C5.01758 9.33594 4.67383 8.30859 4.67383 6.99219ZM12.2711 5.62109V4.76562H15.8805V5.62109H12.2711ZM13.402 9.45312V5.28125V5.10547V3.3125H14.5152V9.45312C14.5152 9.72656 14.5699 9.92188 14.6793 10.0391C14.7926 10.1562 14.9703 10.2148 15.2125 10.2148C15.3219 10.2148 15.4293 10.2031 15.5348 10.1797C15.6441 10.1562 15.7555 10.125 15.8687 10.0859V11C15.7633 11.0469 15.6266 11.0879 15.4586 11.123C15.2945 11.1582 15.1129 11.1758 14.9137 11.1758C14.4527 11.1758 14.0855 11.0371 13.8121 10.7598C13.5387 10.4824 13.402 10.0469 13.402 9.45312ZM17.1906 11V4.76562H18.1984L18.2453 5.56836H18.2805C18.4406 5.30664 18.6516 5.07812 18.9133 4.88281C19.1789 4.6875 19.4934 4.58984 19.8566 4.58984C19.9426 4.58984 20.0324 4.59961 20.1262 4.61914C20.2238 4.63867 20.2922 4.65625 20.3313 4.67188V5.70898C20.2531 5.69336 20.1691 5.68164 20.0793 5.67383C19.9934 5.66602 19.8977 5.66211 19.7922 5.66211C19.4289 5.66211 19.1203 5.75586 18.8664 5.94336C18.6125 6.13086 18.425 6.36133 18.3039 6.63477V11H17.1906ZM21.5711 11V2H22.6844V11H21.5711Z" fill="#471515"/>
<rect x="0.5" y="0.5" width="27" height="13" rx="3.5" stroke="#471515"/>
<path d="M36.3047 6.42383V7.44336H30.457V6.42383H36.3047ZM33.9258 3.93359V10.1445H32.8418V3.93359H33.9258Z" fill="#471515"/>
<path d="M43.9961 11V2.46875H46.8848C47.8418 2.46875 48.5762 2.70508 49.0879 3.17773C49.6035 3.65039 49.8613 4.2793 49.8613 5.06445C49.8613 5.84961 49.6035 6.48242 49.0879 6.96289C48.5762 7.44336 47.8418 7.68359 46.8848 7.68359H45.1445V11H43.9961ZM45.1445 6.73438H46.8848C47.5605 6.73438 48.0332 6.57227 48.3027 6.24805C48.5762 5.92383 48.7129 5.5293 48.7129 5.06445C48.7129 4.59961 48.5762 4.20898 48.3027 3.89258C48.0332 3.57617 47.5605 3.41797 46.8848 3.41797H45.1445V6.73438Z" fill="#471515"/>
<rect x="39.5" y="0.5" width="15" height="13" rx="3.5" stroke="#471515"/>
</g>
<defs>
<clipPath id="clip0_171_927">
<rect width="55" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`
const ctrlK = `
<svg width="55" height="14" viewBox="0 0 55 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" clip-path="url(#clip0_171_937)">
<path d="M4.67383 6.99219V6.47656C4.67383 5.16016 5.01758 4.13477 5.70508 3.40039C6.39258 2.66211 7.25391 2.29297 8.28906 2.29297C9.32812 2.29297 10.1348 2.57227 10.709 3.13086C11.2832 3.68945 11.584 4.36328 11.6113 5.15234V5.21094H10.4629V5.15234C10.4473 4.63672 10.2617 4.19727 9.90625 3.83398C9.55469 3.4668 9.01562 3.2832 8.28906 3.2832C7.57812 3.2832 6.99023 3.55273 6.52539 4.0918C6.06445 4.62695 5.83398 5.42188 5.83398 6.47656V6.99219C5.83398 7.98828 6.06445 8.76953 6.52539 9.33594C6.98633 9.90234 7.57422 10.1855 8.28906 10.1855C8.98828 10.1855 9.51172 10.002 9.85938 9.63477C10.207 9.26367 10.4062 8.82422 10.457 8.31641L10.4629 8.25781H11.6113L11.6055 8.31641C11.5273 9.10156 11.2148 9.77539 10.668 10.3379C10.1211 10.8965 9.32812 11.1758 8.28906 11.1758C7.25391 11.1758 6.39258 10.8086 5.70508 10.0742C5.01758 9.33594 4.67383 8.30859 4.67383 6.99219ZM12.2711 5.62109V4.76562H15.8805V5.62109H12.2711ZM13.402 9.45312V5.28125V5.10547V3.3125H14.5152V9.45312C14.5152 9.72656 14.5699 9.92188 14.6793 10.0391C14.7926 10.1562 14.9703 10.2148 15.2125 10.2148C15.3219 10.2148 15.4293 10.2031 15.5348 10.1797C15.6441 10.1562 15.7555 10.125 15.8687 10.0859V11C15.7633 11.0469 15.6266 11.0879 15.4586 11.123C15.2945 11.1582 15.1129 11.1758 14.9137 11.1758C14.4527 11.1758 14.0855 11.0371 13.8121 10.7598C13.5387 10.4824 13.402 10.0469 13.402 9.45312ZM17.1906 11V4.76562H18.1984L18.2453 5.56836H18.2805C18.4406 5.30664 18.6516 5.07812 18.9133 4.88281C19.1789 4.6875 19.4934 4.58984 19.8566 4.58984C19.9426 4.58984 20.0324 4.59961 20.1262 4.61914C20.2238 4.63867 20.2922 4.65625 20.3313 4.67188V5.70898C20.2531 5.69336 20.1691 5.68164 20.0793 5.67383C19.9934 5.66602 19.8977 5.66211 19.7922 5.66211C19.4289 5.66211 19.1203 5.75586 18.8664 5.94336C18.6125 6.13086 18.425 6.36133 18.3039 6.63477V11H17.1906ZM21.5711 11V2H22.6844V11H21.5711Z" fill="#471515"/>
<rect x="0.5" y="0.5" width="27" height="13" rx="3.5" stroke="#471515"/>
<path d="M36.3047 6.42383V7.44336H30.457V6.42383H36.3047ZM33.9258 3.93359V10.1445H32.8418V3.93359H33.9258Z" fill="#471515"/>
<path d="M43.9961 11V2.46875H45.1504V6.6875L49.0059 2.46875H50.4004L45.1445 8.11133V11H43.9961ZM49.2461 11L45.9004 6.57617L46.6445 5.77344L50.6641 11H49.2461Z" fill="#471515"/>
<rect x="39.5" y="0.5" width="15" height="13" rx="3.5" stroke="#471515"/>
</g>
<defs>
<clipPath id="clip0_171_937">
<rect width="55" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`
export default { statisticsSvg ,pereferncesSvg,shortcutSvg,ctrlK,ctrlP,ctrlS};
