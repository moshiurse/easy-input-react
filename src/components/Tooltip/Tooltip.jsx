 import React, { useLayoutEffect, useRef, useState } from 'react';
 import { createPortal } from "react-dom";
import TooltipContainer from './TooltipContainer';
 
 export default function Tooltip({children, targetRect}) {
    const ref = useRef();
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        const { height } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
        console.log('Measured tooltip height: ' + height);
    })

    let tooltipX = 0;
    let tooltipY = 0;

    if (targetRect !== null) {
        console.log(targetRect);
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight;
        if (tooltipY < 0) {
          // It doesn't fit above, so place below.
          tooltipY = targetRect.bottom;
        }
    }

   return (

    createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>{children}</TooltipContainer>,
        document.body
    )
   )
 }
 