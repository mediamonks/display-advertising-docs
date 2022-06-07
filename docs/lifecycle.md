---
sidebar_position: 4
---

# Lifecycle of a banner


| **Action**                  | **What happens at that moment**                          |
|-----------------------------|----------------------------------------------------------|
| 1) Banner init              | Load images, fonts and add listeners                     |
| 2) Create and set animation | Set timeline with all the frames and add eventCallback   |
| 3) Banner start             | Run the animation of the banner.                         |
| 4) Animation start          | Invoke the eventCallback that the animation started      |
| 5) Animation complete       | Invokes the eventCallback that the animation is complete |