import { keyframes } from "styled-components"

export const BounceTop = keyframes `
0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }

`;

// .bounce-top {
// 	-webkit-animation: bounce-top 0.9s both;
// 	        animation: bounce-top 0.9s both;
// }

// (With Delay)
// .bounce-top {
// 	-webkit-animation: bounce-top 0.9s 2s both;
// 	        animation: bounce-top 0.9s 2s both;
// }

export const SwingUp = keyframes `
0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
}
@keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
`;

// .swing-in-bottom-bck {
// 	-webkit-animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
// 	        animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
// }