export default props => (
  <div>
    <div class="icon icon--order-success svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
        <g fill="none" stroke="#8EC343" stroke-width="2">
          <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
          <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
        </g>
      </svg>
    </div>
    <style >{`
      /* animations */

@-webkit-keyframes checkmark {
    0% {
        stroke-dashoffset: 50px
    }

    100% {
        stroke-dashoffset: 0
    }
}

@-ms-keyframes checkmark {
    0% {
        stroke-dashoffset: 50px
    }

    100% {
        stroke-dashoffset: 0
    }
}

@keyframes checkmark {
    0% {
        stroke-dashoffset: 50px
    }

    100% {
        stroke-dashoffset: 0
    }
}

@-webkit-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 240px
    }

    100% {
        stroke-dashoffset: 480px
    }
}

@-ms-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 240px
    }

    100% {
        stroke-dashoffset: 480px
    }
}

@keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 240px
    }

    100% {
        stroke-dashoffset: 480px
    }
}

/* other styles */
/* .svg svg {
    display: none
}
 */
.inlinesvg .svg svg {
    display: inline
}

/* .svg img {
    display: none
} */

.icon--order-success svg path {
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards
}

.icon--order-success svg circle {
    -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
    animation: checkmark-circle 0.6s ease-in-out backwards
}


    `}</style>
  </div>
)
