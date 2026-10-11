# btz — Portfolio Editorial + 3D Display

A personal portfolio where an editorial hero page frames a 3D-rendered CRT display that hosts a mid-2000s personal weblog.

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
The mid-2000s personal weblog (`SiteContent`), shown in Internet Explorer on Windows XP *through* Screen. Laid out on a fixed 960×576 canvas that renders at about half size on Glass, so type stays large.
_Avoid_: site, legacy, inner page

**Idle Drift**:
The slow sine-based yaw/pitch animation when no pointer is active; honors `prefers-reduced-motion`.
_Avoid_: auto-rotate, float
