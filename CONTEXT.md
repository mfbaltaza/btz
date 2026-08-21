# btz — Portfolio Editorial + 3D Display

A personal portfolio where an editorial hero page frames a 3D-rendered CRT display that hosts a period-faithful 2005 site.

## Language

### Display Domain

**Monitor**:
A Three.js Group comprising Housing, Neck, Foot and Glass; the physical object rendered on the editorial canvas.
_Avoid_: CRT, screen (when meaning the object)

**Housing**:
The injection-moulded shell (front body, bezel, rear panel) of the Monitor.
_Avoid_: body, case

**Glass**:
The extruded physical lens (`screenMesh`) with thickness, bevel and barrel curvature.
_Avoid_: screen (when meaning the lens)

**Screen**:
The DOM layer (`data-crt-screen`) projected via homography onto Glass; hosts SiteContent and receives input.
_Avoid_: glass, display

**Artifacts**:
The SVG overlay and distortion copies that simulate scanlines, phosphor, vignette and signal tear.
_Avoid_: effects, glitches, noise

**SiteContent**:
The 2005-period DOM (`LegacyPage`) shown *through* Screen; intentionally left faithful and not redesigned.
_Avoid_: site, legacy, inner page

**Idle Drift**:
The slow sine-based yaw/pitch animation when no pointer is active; honors `prefers-reduced-motion`.
_Avoid_: auto-rotate, float
