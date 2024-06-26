import { memo, SVGProps, useContext } from "react";
import { AppContext } from "../../App";

export const InstagramIcon = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99844 2.39999C4.91124 2.39999 2.4 4.91356 2.4 8.00156V16.0016C2.4 19.0888 4.91356 21.6 8.00156 21.6H16.0016C19.0888 21.6 21.6 19.0864 21.6 15.9984V7.99843C21.6 4.91123 19.0864 2.39999 15.9984 2.39999H7.99844ZM17.6 5.59999C18.0416 5.59999 18.4 5.95839 18.4 6.39999C18.4 6.84159 18.0416 7.19999 17.6 7.19999C17.1584 7.19999 16.8 6.84159 16.8 6.39999C16.8 5.95839 17.1584 5.59999 17.6 5.59999ZM12 7.19999C14.6472 7.19999 16.8 9.35279 16.8 12C16.8 14.6472 14.6472 16.8 12 16.8C9.3528 16.8 7.2 14.6472 7.2 12C7.2 9.35279 9.3528 7.19999 12 7.19999ZM12 8.79999C11.1513 8.79999 10.3374 9.13713 9.73726 9.73725C9.13714 10.3374 8.8 11.1513 8.8 12C8.8 12.8487 9.13714 13.6626 9.73726 14.2627C10.3374 14.8629 11.1513 15.2 12 15.2C12.8487 15.2 13.6626 14.8629 14.2627 14.2627C14.8629 13.6626 15.2 12.8487 15.2 12C15.2 11.1513 14.8629 10.3374 14.2627 9.73725C13.6626 9.13713 12.8487 8.79999 12 8.79999V8.79999Z"
        fill={color}
      />
    </svg>
  );
});

export const TwitterIcon = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.4 5.5496C21.6344 5.8896 20.812 6.1184 19.9488 6.2216C20.8304 5.6936 21.5064 4.8576 21.8248 3.8608C21.0008 4.3496 20.0872 4.7048 19.1144 4.8968C18.336 4.0672 17.2272 3.5488 16 3.5488C13.6432 3.5488 11.7328 5.46 11.7328 7.816C11.7328 8.1504 11.7712 8.4768 11.8432 8.788C8.2968 8.6104 5.1528 6.9112 3.0472 4.3288C2.6808 4.9592 2.4704 5.692 2.4704 6.4752C2.4704 7.9552 3.2232 9.2616 4.368 10.0264C3.6688 10.004 3.0104 9.812 2.4352 9.4928C2.4352 9.5112 2.4352 9.528 2.4352 9.5464C2.4352 11.6144 3.9056 13.3392 5.8584 13.7304C5.5008 13.828 5.1232 13.88 4.7336 13.88C4.4592 13.88 4.1912 13.8528 3.9312 13.804C4.4744 15.4992 6.0504 16.7336 7.9176 16.768C6.4576 17.9128 4.6176 18.5952 2.6176 18.5952C2.2736 18.5952 1.9336 18.5752 1.5992 18.5352C3.488 19.7456 5.7304 20.452 8.1408 20.452C15.9904 20.452 20.2816 13.9496 20.2816 8.3104C20.2816 8.1256 20.2776 7.9416 20.2696 7.7584C21.104 7.156 21.828 6.4048 22.4 5.5496Z"
        fill={color}
      />
    </svg>
  );
});

export const YoutubeIcon = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3.20001C8.65121 3.20001 4.30469 4.03907 4.30469 4.03907L4.29376 4.05157C2.76854 4.2955 1.60001 5.60611 1.60001 7.20001V12V12.0016V16.8V16.8016C1.60149 17.5628 1.8743 18.2986 2.36944 18.8768C2.86459 19.4549 3.54963 19.8377 4.30157 19.9563L4.30469 19.9609C4.30469 19.9609 8.65121 20.8016 12 20.8016C15.3488 20.8016 19.6953 19.9609 19.6953 19.9609L19.6969 19.9594C20.4496 19.8411 21.1355 19.458 21.631 18.8791C22.1265 18.3003 22.3992 17.5636 22.4 16.8016V16.8V12.0016V12V7.20001C22.3989 6.43851 22.1262 5.70237 21.6311 5.12386C21.1359 4.54534 20.4506 4.16237 19.6984 4.04376L19.6953 4.03907C19.6953 4.03907 15.3488 3.20001 12 3.20001ZM9.60001 8.31876L16 12L9.60001 15.6813V8.31876Z"
        fill={color}
      />
    </svg>
  );
});

export const ShoppingBag = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.49594 23.28L4.31166 6.7207H20.659L21.4747 23.28H3.49594Z"
        stroke={color}
      />
      <path
        d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491"
        stroke={color}
      />
    </svg>
  );
});

export const MINUS = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 12L21 12" stroke={color} />
    </svg>
  );
});

export const Plus = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 3V21" stroke={color} />
      <path d="M3 12L21 12" stroke={color} />
    </svg>
  );
});

export const ForwardArrow = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.2827 5L20.9998 12L14.2827 19" stroke={color} />
      <line
        x1="20.6279"
        y1="12.1089"
        x2="2.89487"
        y2="12.1089"
        stroke={color}
      />
    </svg>
  );
});

export const Backward = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.61182 19L2.89474 12L9.61182 5" stroke={color} />
      <line x1="3.2666" y1="11.8911" x2="20.9997" y2="11.8911" stroke={color} />
    </svg>
  );
});

export const Heart = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  const file_color = props.fill !== undefined ? props.fill : "none";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z"
        stroke={color}
        fill={file_color}
      />
    </svg>
  );
});

export const SearchIcon = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
        stroke={color}
      />
      <path d="M22 21.9999L18.7823 18.7822" stroke={color} />
    </svg>
  );
});

export const MenuIcon = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.306763 12H15.9824" stroke={color} />
      <path d="M0.306641 5H23.6931" stroke={color} />
      <path d="M0.306641 19H23.6931" stroke={color} />
    </svg>
  );
});

export const Close = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6L18.7742 18.7742" stroke={color} strokeLinejoin="round" />
      <path
        d="M6 18.7744L18.7742 6.00022"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
});

export const DoorDelivery = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9459 0.480185C12.902 0.48142 12.8585 0.488675 12.8165 0.501748L5.13655 2.90175C5.03892 2.93233 4.95362 2.99329 4.89307 3.07576C4.83253 3.15823 4.79992 3.25788 4.79999 3.36018V21.1202C4.79995 21.2273 4.83573 21.3314 4.90164 21.4158C4.96756 21.5002 5.05981 21.5602 5.16374 21.5861L12.8437 23.5061C12.9145 23.5238 12.9884 23.5251 13.0597 23.5099C13.1311 23.4947 13.198 23.4635 13.2555 23.4186C13.313 23.3737 13.3595 23.3163 13.3914 23.2507C13.4234 23.1851 13.44 23.1131 13.44 23.0402V0.960185C13.44 0.895952 13.4271 0.832367 13.4021 0.773198C13.3771 0.714029 13.3405 0.660478 13.2944 0.615719C13.2484 0.570959 13.1938 0.535901 13.1339 0.51262C13.0741 0.489339 13.0101 0.47831 12.9459 0.480185ZM12.48 1.61362V22.4252L5.75999 20.7452V3.71269L12.48 1.61362ZM14.4 2.40018V3.36018H18.24V12.9602H19.2V2.88019C19.2 2.75289 19.1494 2.6308 19.0594 2.54079C18.9694 2.45077 18.8473 2.4002 18.72 2.40018H14.4ZM11.52 11.5202C11.3927 11.5202 11.2706 11.596 11.1806 11.7311C11.0906 11.8661 11.04 12.0492 11.04 12.2402C11.04 12.4311 11.0906 12.6143 11.1806 12.7493C11.2706 12.8843 11.3927 12.9602 11.52 12.9602C11.6473 12.9602 11.7694 12.8843 11.8594 12.7493C11.9494 12.6143 12 12.4311 12 12.2402C12 12.0492 11.9494 11.8661 11.8594 11.7311C11.7694 11.596 11.6473 11.5202 11.52 11.5202ZM14.88 13.9202C14.7527 13.9202 14.6306 13.9708 14.5406 14.0608C14.4506 14.1508 14.4 14.2729 14.4 14.4002V21.1202C14.4 21.2475 14.4506 21.3696 14.5406 21.4596C14.6306 21.5496 14.7527 21.6002 14.88 21.6002H22.56C22.6873 21.6002 22.8094 21.5496 22.8994 21.4596C22.9894 21.3696 23.04 21.2475 23.04 21.1202V14.4002C23.04 14.2729 22.9894 14.1508 22.8994 14.0608C22.8094 13.9708 22.6873 13.9202 22.56 13.9202H14.88ZM15.36 14.8802H22.08V20.6402H15.36V14.8802ZM17.76 15.8402C17.6964 15.8393 17.6332 15.851 17.5742 15.8748C17.5152 15.8985 17.4615 15.9337 17.4162 15.9783C17.3709 16.023 17.3349 16.0762 17.3103 16.1349C17.2858 16.1936 17.2731 16.2566 17.2731 16.3202C17.2731 16.3838 17.2858 16.4468 17.3103 16.5055C17.3349 16.5641 17.3709 16.6174 17.4162 16.662C17.4615 16.7067 17.5152 16.7419 17.5742 16.7656C17.6332 16.7893 17.6964 16.8011 17.76 16.8002H19.68C19.7436 16.8011 19.8067 16.7893 19.8658 16.7656C19.9248 16.7419 19.9785 16.7067 20.0238 16.662C20.0691 16.6174 20.1051 16.5641 20.1296 16.5055C20.1542 16.4468 20.1668 16.3838 20.1668 16.3202C20.1668 16.2566 20.1542 16.1936 20.1296 16.1349C20.1051 16.0762 20.0691 16.023 20.0238 15.9783C19.9785 15.9337 19.9248 15.8985 19.8658 15.8748C19.8067 15.851 19.7436 15.8393 19.68 15.8402H17.76Z"
        fill={color}
      />
    </svg>
  );
});

export const Tag = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5352 1.22171L24.284 12.9706L12.9703 24.2843L1.22148 12.5354L1.65662 1.65685L12.5352 1.22171Z"
        stroke={color}
      />
      <circle cx="8.14062" cy="7.55664" r="1" stroke={color} />
    </svg>
  );
});

export const Refresh = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.7562 9.38144C4.30918 7.45296 5.45849 5.74904 7.0394 4.5139C8.62031 3.27876 10.5517 2.5758 12.5566 2.50579C14.5616 2.43577 16.5373 3.00229 18.2005 4.12414C19.8637 5.246 21.1291 6.8656 21.8153 8.75081"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M21.6409 15.6931C20.9263 17.3868 19.7356 18.8368 18.2132 19.8673C16.6908 20.8977 14.9022 21.4643 13.0642 21.4984C11.2262 21.5324 9.41779 21.0325 7.85828 20.0592C6.29878 19.0858 5.05517 17.681 4.27826 16.0149"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M8.60114 15.0242L4.14699 15.3157L2.49292 19.5527"
        stroke={color}
      />
      <path
        d="M17.0747 9.36035L21.7004 9.34898L23.2797 5.13764"
        stroke={color}
      />
    </svg>
  );
});

export const Call = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.9719 1.82835L22.3359 2.53546C22.3359 2.53546 23.043 8.89942 15.9719 15.9705C8.90087 23.0416 2.53553 22.3358 2.53553 22.3358L1.82843 15.9719L6.77955 13.1434L9.25374 15.6176C9.25374 15.6176 11.0215 15.2641 13.1428 13.1427C15.2641 11.0214 15.6177 9.25366 15.6177 9.25366L13.1435 6.77948L15.9719 1.82835Z"
        stroke={color}
      />
    </svg>
  );
});

export const Location = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 11C22 16.5228 12 24 12 24C12 24 2 16.5228 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11Z"
        stroke={color}
      />
      <circle cx="12" cy="11" r="3" stroke={color} />
    </svg>
  );
});

export const DoNotBleach = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.65095 11.4464L3.84064 18.5406H19.9805L11.988 3.54688L8.7352 9.33988"
        stroke={color}
      />
      <path d="M3.77869 6.95459L21.8082 16.0004" stroke={color} />
    </svg>
  );
});

export const DoNotTumbleDry = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4.38629" y="4.48975" width="15" height="15" stroke={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3549 16.3966L2.24756 7.38002L2.6933 6.48486L20.8006 15.5014L20.3549 16.3966Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.845 14.751C14.1197 15.49 13.1095 15.9483 11.9922 15.9483C9.78469 15.9483 7.99512 14.1588 7.99512 11.9512C7.99512 11.7509 8.00985 11.554 8.0383 11.3616L7.1064 10.8976C7.0335 11.2373 6.99512 11.5898 6.99512 11.9512C6.99512 14.711 9.2324 16.9483 11.9922 16.9483C13.5047 16.9483 14.8601 16.2764 15.7765 15.2149L14.845 14.751ZM8.31483 10.3822C8.92473 8.95458 10.3416 7.9541 11.9922 7.9541C14.1998 7.9541 15.9893 9.74367 15.9893 11.9512C15.9893 12.6753 15.7968 13.3544 15.4601 13.9402L16.3567 14.3867C16.7597 13.6661 16.9893 12.8355 16.9893 11.9512C16.9893 9.19139 14.7521 6.9541 11.9922 6.9541C9.94954 6.9541 8.19312 8.17973 7.41823 9.93573L8.31483 10.3822Z"
        fill={color}
      />
    </svg>
  );
});

export const DoNotWash = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.69635 5.23628L4.81609 19.2713H19.1081L21.3884 4.78662"
        stroke={color}
      />
      <path
        d="M8.25888 6.6498C8.29179 7.7245 9.06165 9.87391 11.8778 9.87391C14.694 9.87391 15.6612 7.68063 15.7928 6.58398C16.0012 7.69159 17.4049 9.88705 20.4316 9.80809M3.37659 10.094C4.01512 10.1512 5.46946 9.89956 6.17853 8.43569"
        stroke={color}
      />
      <path d="M3.1922 2.74658L20.4393 20.3471" stroke={color} />
    </svg>
  );
});

export const IronLowTemperature = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.66513 6.05859H14.9542C16.4447 6.05859 19.5971 6.94062 20.2831 10.4688M20.2831 10.4688C20.9691 13.9969 20.9773 17.0432 20.8956 18.1253H3.00989C3.1324 15.614 4.68824 10.5913 9.93146 10.5913C15.1747 10.5913 19.0172 10.5096 20.2831 10.4688Z"
        stroke={color}
      />
      <circle cx="12.7491" cy="14.2663" r="0.735026" fill={color} />
    </svg>
  );
});

export const Shipping = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5654 6.87109H18.0525L22.4874 11.2538V17.9844H20.4914"
        stroke={color}
      />
      <path d="M8.55664 18.0889H15.2872" stroke={color} />
      <circle cx="17.9482" cy="17.9843" r="2.4218" stroke={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05223 19.9061C7.11362 19.9061 7.97404 19.0457 7.97404 17.9843C7.97404 16.9229 7.11362 16.0625 6.05223 16.0625C4.99085 16.0625 4.13043 16.9229 4.13043 17.9843C4.13043 19.0457 4.99085 19.9061 6.05223 19.9061ZM6.05223 20.9061C7.6659 20.9061 8.97404 19.598 8.97404 17.9843C8.97404 16.3706 7.6659 15.0625 6.05223 15.0625C4.43857 15.0625 3.13043 16.3706 3.13043 17.9843C3.13043 19.598 4.43857 20.9061 6.05223 20.9061Z"
        fill={color}
      />
      <path
        d="M1.49817 18.4932L1.49818 3.50098L13.501 3.52347V17.9844H8.4523"
        stroke={color}
      />
      <path d="M1.19995 17.9844H3.70435" stroke={color} />
    </svg>
  );
});

export const Export = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 6L11.5 1L6 6" stroke={color} />
      <line
        y1="-0.5"
        x2="13"
        y2="-0.5"
        transform="matrix(0 1 1 0 12 1)"
        stroke={color}
      />
      <path d="M3 12V22H20V12" stroke={color} />
    </svg>
  );
});

export const Resize = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.0874 3.64551L20.3618 3.64551L20.3618 10.9363"
        stroke={color}
      />
      <line
        y1="-0.5"
        x2="10.1647"
        y2="-0.5"
        transform="matrix(-0.70631 0.707903 -0.70631 -0.707903 19.8218 3.43262)"
        stroke={color}
      />
      <path d="M10.9117 20.355L3.63725 20.355L3.63725 13.0641" stroke={color} />
      <line
        y1="-0.5"
        x2="10.1647"
        y2="-0.5"
        transform="matrix(0.70631 -0.707903 0.70631 0.707903 4.22784 20.4272)"
        stroke={color}
      />
    </svg>
  );
});

export const Voucher = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.7 4.7998C2.0408 4.7998 1.5 5.3406 1.5 5.9998V10.1998H1.8C2.79767 10.1998 3.6 11.0021 3.6 11.9998C3.6 12.9975 2.79767 13.7998 1.8 13.7998H1.5V17.9998C1.5 18.659 2.0408 19.1998 2.7 19.1998H21.3C21.9592 19.1998 22.5 18.659 22.5 17.9998V13.7998H22.2C21.2023 13.7998 20.4 12.9975 20.4 11.9998C20.4 11.0021 21.2023 10.1998 22.2 10.1998H22.5V5.9998C22.5 5.3406 21.9592 4.7998 21.3 4.7998H2.7ZM2.7 5.3998H7.2C7.2 5.47937 7.23161 5.55568 7.28787 5.61194C7.34413 5.6682 7.42044 5.6998 7.5 5.6998C7.57957 5.6998 7.65587 5.6682 7.71213 5.61194C7.76839 5.55568 7.8 5.47937 7.8 5.3998H21.3C21.635 5.3998 21.9 5.6648 21.9 5.9998V9.66074C20.7254 9.81521 19.8 10.7842 19.8 11.9998C19.8 13.2154 20.7254 14.1844 21.9 14.3389V17.9998C21.9 18.3348 21.635 18.5998 21.3 18.5998H7.8C7.8 18.5202 7.76839 18.4439 7.71213 18.3877C7.65587 18.3314 7.57957 18.2998 7.5 18.2998C7.42044 18.2998 7.34413 18.3314 7.28787 18.3877C7.23161 18.4439 7.2 18.5202 7.2 18.5998H2.7C2.365 18.5998 2.1 18.3348 2.1 17.9998V14.3389C3.27462 14.1844 4.2 13.2154 4.2 11.9998C4.2 10.7842 3.27462 9.81521 2.1 9.66074V5.9998C2.1 5.6648 2.365 5.3998 2.7 5.3998ZM7.5 6.2998C7.42044 6.2998 7.34413 6.33141 7.28787 6.38767C7.23161 6.44393 7.2 6.52024 7.2 6.5998C7.2 6.67937 7.23161 6.75568 7.28787 6.81194C7.34413 6.8682 7.42044 6.8998 7.5 6.8998C7.57957 6.8998 7.65587 6.8682 7.71213 6.81194C7.76839 6.75568 7.8 6.67937 7.8 6.5998C7.8 6.52024 7.76839 6.44393 7.71213 6.38767C7.65587 6.33141 7.57957 6.2998 7.5 6.2998ZM7.5 7.4998C7.42044 7.4998 7.34413 7.53141 7.28787 7.58767C7.23161 7.64393 7.2 7.72024 7.2 7.7998C7.2 7.87937 7.23161 7.95568 7.28787 8.01194C7.34413 8.0682 7.42044 8.0998 7.5 8.0998C7.57957 8.0998 7.65587 8.0682 7.71213 8.01194C7.76839 7.95568 7.8 7.87937 7.8 7.7998C7.8 7.72024 7.76839 7.64393 7.71213 7.58767C7.65587 7.53141 7.57957 7.4998 7.5 7.4998ZM11.7293 8.29316C10.8356 8.29316 10.2 9.00841 10.2 10.0164C10.2 11.0295 10.8356 11.7443 11.7293 11.7443C12.623 11.7443 13.2539 11.0292 13.2539 10.0164C13.2539 9.00331 12.623 8.29316 11.7293 8.29316ZM15.985 8.41738L13.4725 11.848L10.7361 15.5822H11.6496L14.1076 12.2207L16.8885 8.41738H15.985ZM7.5 8.6998C7.42044 8.6998 7.34413 8.73141 7.28787 8.78767C7.23161 8.84393 7.2 8.92024 7.2 8.9998C7.2 9.07937 7.23161 9.15568 7.28787 9.21194C7.34413 9.2682 7.42044 9.2998 7.5 9.2998C7.57957 9.2998 7.65587 9.2682 7.71213 9.21194C7.76839 9.15568 7.8 9.07937 7.8 8.9998C7.8 8.92024 7.76839 8.84393 7.71213 8.78767C7.65587 8.73141 7.57957 8.6998 7.5 8.6998ZM11.7293 8.92891C12.1763 8.92891 12.4594 9.34591 12.4594 10.0164C12.4594 10.6719 12.1661 11.1086 11.7293 11.1086C11.2874 11.1086 10.9945 10.6767 10.9945 10.0164C10.9945 9.35611 11.2823 8.92891 11.7293 8.92891ZM7.5 9.89981C7.42044 9.89981 7.34413 9.93141 7.28787 9.98767C7.23161 10.0439 7.2 10.1202 7.2 10.1998C7.2 10.2794 7.23161 10.3557 7.28787 10.4119C7.34413 10.4682 7.42044 10.4998 7.5 10.4998C7.57957 10.4998 7.65587 10.4682 7.71213 10.4119C7.76839 10.3557 7.8 10.2794 7.8 10.1998C7.8 10.1202 7.76839 10.0439 7.71213 9.98767C7.65587 9.93141 7.57957 9.89981 7.5 9.89981ZM7.5 11.0998C7.42044 11.0998 7.34413 11.1314 7.28787 11.1877C7.23161 11.2439 7.2 11.3202 7.2 11.3998C7.2 11.4794 7.23161 11.5557 7.28787 11.6119C7.34413 11.6682 7.42044 11.6998 7.5 11.6998C7.57957 11.6998 7.65587 11.6682 7.71213 11.6119C7.76839 11.5557 7.8 11.4794 7.8 11.3998C7.8 11.3202 7.76839 11.2439 7.71213 11.1877C7.65587 11.1314 7.57957 11.0998 7.5 11.0998ZM15.876 12.2553C14.9823 12.2553 14.3461 12.9705 14.3461 13.9785C14.3461 14.9916 14.9823 15.7064 15.876 15.7064C16.7697 15.7064 17.4 14.9913 17.4 13.9785C17.4 12.9654 16.7697 12.2553 15.876 12.2553ZM7.5 12.2998C7.42044 12.2998 7.34413 12.3314 7.28787 12.3877C7.23161 12.4439 7.2 12.5202 7.2 12.5998C7.2 12.6794 7.23161 12.7557 7.28787 12.8119C7.34413 12.8682 7.42044 12.8998 7.5 12.8998C7.57957 12.8998 7.65587 12.8682 7.71213 12.8119C7.76839 12.7557 7.8 12.6794 7.8 12.5998C7.8 12.5202 7.76839 12.4439 7.71213 12.3877C7.65587 12.3314 7.57957 12.2998 7.5 12.2998ZM15.876 12.891C16.323 12.891 16.6055 13.308 16.6055 13.9785C16.6055 14.634 16.3128 15.0707 15.876 15.0707C15.4341 15.0707 15.1406 14.6388 15.1406 13.9785C15.1406 13.3182 15.429 12.891 15.876 12.891ZM7.5 13.4998C7.42044 13.4998 7.34413 13.5314 7.28787 13.5877C7.23161 13.6439 7.2 13.7202 7.2 13.7998C7.2 13.8794 7.23161 13.9557 7.28787 14.0119C7.34413 14.0682 7.42044 14.0998 7.5 14.0998C7.57957 14.0998 7.65587 14.0682 7.71213 14.0119C7.76839 13.9557 7.8 13.8794 7.8 13.7998C7.8 13.7202 7.76839 13.6439 7.71213 13.5877C7.65587 13.5314 7.57957 13.4998 7.5 13.4998ZM7.5 14.6998C7.42044 14.6998 7.34413 14.7314 7.28787 14.7877C7.23161 14.8439 7.2 14.9202 7.2 14.9998C7.2 15.0794 7.23161 15.1557 7.28787 15.2119C7.34413 15.2682 7.42044 15.2998 7.5 15.2998C7.57957 15.2998 7.65587 15.2682 7.71213 15.2119C7.76839 15.1557 7.8 15.0794 7.8 14.9998C7.8 14.9202 7.76839 14.8439 7.71213 14.7877C7.65587 14.7314 7.57957 14.6998 7.5 14.6998ZM7.5 15.8998C7.42044 15.8998 7.34413 15.9314 7.28787 15.9877C7.23161 16.0439 7.2 16.1202 7.2 16.1998C7.2 16.2794 7.23161 16.3557 7.28787 16.4119C7.34413 16.4682 7.42044 16.4998 7.5 16.4998C7.57957 16.4998 7.65587 16.4682 7.71213 16.4119C7.76839 16.3557 7.8 16.2794 7.8 16.1998C7.8 16.1202 7.76839 16.0439 7.71213 15.9877C7.65587 15.9314 7.57957 15.8998 7.5 15.8998ZM7.5 17.0998C7.42044 17.0998 7.34413 17.1314 7.28787 17.1877C7.23161 17.2439 7.2 17.3202 7.2 17.3998C7.2 17.4794 7.23161 17.5557 7.28787 17.6119C7.34413 17.6682 7.42044 17.6998 7.5 17.6998C7.57957 17.6998 7.65587 17.6682 7.71213 17.6119C7.76839 17.5557 7.8 17.4794 7.8 17.3998C7.8 17.3202 7.76839 17.2439 7.71213 17.1877C7.65587 17.1314 7.57957 17.0998 7.5 17.0998Z"
        fill={color}
      />
    </svg>
  );
});

export const Forward = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 5L15.9632 11.9632L9 18.9263" stroke={color} />
    </svg>
  );
});

export const Up = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.51843 15.4448L12.4816 8.48165L19.4448 15.4448"
        stroke={color}
      />
    </svg>
  );
});

export const Down = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.4447 8.48145L12.4815 15.4446L5.51836 8.48144"
        stroke={color}
      />
    </svg>
  );
});

export const Back = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.963 18.9263L8.99984 11.9631L15.963 4.99993" stroke={color} />
    </svg>
  );
});

export const Filter = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.5V8.5H21V7.5H3ZM10 16.5H14V15.5H10V16.5ZM18 12.5H6V11.5H18V12.5Z"
        fill={color}
      />
    </svg>
  );
});

export const GridView = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4.50024" y="4.5" width="6" height="6" stroke={color} />
      <rect x="4.50024" y="13.5" width="6" height="6" stroke={color} />
      <rect x="13.5002" y="4.5" width="6" height="6" stroke={color} />
      <rect x="13.5002" y="13.5" width="6" height="6" stroke={color} />
    </svg>
  );
});

export const Gallery = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.04492 18.0259H20.9553" stroke={color} />
      <path d="M20.8018 17.5327L20.8018 21.3921" stroke={color} />
      <path d="M3.30518 17.5327L3.30518 21.3921" stroke={color} />
      <rect x="3.25" y="3.45508" width="17.5" height="10.7458" stroke={color} />
    </svg>
  );
});

export const ListView = memo((props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(AppContext);
  const theme_color = theme === "dark" ? "white" : "black";
  const color = props.color !== undefined ? props.color : theme_color;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.2051 17H19.9768" stroke={color} />
      <path d="M12.2283 7H20" stroke={color} />
      <rect x="2.51318" y="3.45508" width="7" height="7" stroke={color} />
      <rect x="2.51318" y="13.5142" width="7" height="7" stroke={color} />
    </svg>
  );
});
