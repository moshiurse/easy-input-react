import React from 'react'

export default function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}
    >
      <div ref={contentRef} style={{ color: 'white', background: '#222', borderRadius: '4px', padding: '4px' }}>
        {children}
      </div>
    </div>
  )
}
