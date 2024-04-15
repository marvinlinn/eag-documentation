---
title: Assembly
layout: default
nav_order: 1
parent: Detector Setup
grand_parent: MCP Imaging
last_modified_date: March 21st, 2024
---

{: .fs-8 .fw-500}
# Assembling and Pumping Down a Test Detector

{: .fs-5 .fw-300 }
The following page provides an overview of detector build-up of a 33mm MCP detector. Build-up usually occurs in RM125. 

---
## Introduction
{: .fw-700 }

<!-- ## Walkthrough Video
{: .fw-700 } -->
#### Step 0: Identify Testing Parameters
{: .fw-700 }

Before building a test detector, first identify the testing parameter of your setup. A few key questions to ask:

- What plates are you testing?
- How are the plates intended to be stacked?
- How are the plate oriented (flipped)?

Having and understanding of exactly how the detector should be configued will ensure a straightforwards design process

#### Step 1: Workbench Setup
{: .fw-700 }

Before we move forwards with breakdown of a detector, ensure that your workbench is appropriately setup for detector disassembly. Clean the bench with q quick isopropanol wipe, and (optionally) place and tape down a clean sheet of aluminum foil. 
  <br />
  <p align:center style="width:60%; margin: auto;">
    <img src="/assets/img/disassembly_webp/1_cleaning.webp" />
  </p>
  <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
    Cleaning the workbench
  </p>

Collect the tools you need for disassembly. Here is a rough guideline of tools you may need:
<br />
  <p align:center style="width:60%; margin: auto;">
    <img src="/assets/img/assembly_webp/1_nit_cab.webp" />
  </p>
  <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
    Nitrogen cabinet materials
  </p>

  **!not really sure what some parts are called - review**

| Tools        | Location         |
|:-------------|:------------------|
| T7 Torx wrench | Class 100 Workbench, Tool Rack |
| Dental picks | Class 100 Workbench |
| Tweezers | Class 100 Workbench |
| Petri Dishes | Class 100 Workbench |
| MCP Containers | N2 Cabinet |
| Wrenches | Class 100 Workbench, Tool Rack |
| Test detector window, base holder, flange | Class 100 Workbench **OR** N2 Cabinet |
| MCP Cover | Class 100 Workbench, Petri Dishes |
| Conical spacing ring | Class 100 Workbench, Petri Dishes |
| Flat spacing ring | Class 100 Workbench, Petri Dishes |
| Medium-thick spacing ring (x2) | Class 100 Workbench, Petri Dishes |
| Thin spacing ring | Class 100 Workbench, Petri Dishes |


#### Step 2: Cleaning the Detector
1. Clean the detector with the Nitrogen gun.
    <br />
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/2_clean_detector.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Cleaning detector with N2 gun
    </p>

#### Step 3: Bottom Plate Placement
1. Using the **dental pick**, carefully remove the bottom MCP from its container. Place the MCP case in the **"MCP Under Test" container** on the workbench.
    <br />
    <p align:center style="width:60%; margin: auto;">
    <img src="/assets/img/assembly_webp/3_take_top_MCP.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Bottom MCP removal
    </p>

2. Identify the direction of the pore bias angle by locating the notch. This can be done by following along the MCP circumference until the notch (triangle-shaped) is found. The bias angle can be verified visually by rotating the MCP until it is seethrough.
    <br />
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/4_align_bias.HEIC" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Bias angle alignment
    </p>
    <br />
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/bias_illustration.png" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Illustration of the angled MCP pores. The angle the pore channel makes with respect to the vertical is called the bias angle. If the bias was 0 degrees, the pore would point straight down and the MCP would be see-through straight-on.
    </p>

3. Align the notch to point towards the label "BOT" on the detector.
    <br />
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/4_align_bias.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
    Bias angle alignment
    </p>

4. Use the **tweezers** to hold the mid-voltage contact ring in place, and put the bottom MCP inside the detector. Ensure that the bias angle is aligned with the "BOT" label on the detector. 

    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/5_place_top_plate.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
    Bottom plate placement
    </p>

#### Step 3: Top Plate Placement
1. Take the top MCP plate out of its container and put the container in the **"MCP Under Test" container**. As with the bottom MCP, locate the notch pointing towards the MCP bias angle and align it with the "TOP" label on the detector.

    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/6_take_bot_MCP.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Top plate placement. Aligning the top and bottom plates with their bias angles in different directions aids in electron multiplication as demonstrated in the illustration above
    </p>

2. Place the top plate on top of the mid-voltage contact ring and ensure the bias is aligned with the "TOP" label. 

3. Place spacers on top of the plate in the following order:
    - **Largest conical spacing ring** (with the cross-section of smaller radius at the top)
    - **Flat spacing ring** 
    - **MCP cover** (to protect the plates in the current step; to be removed later)
    - Stack of three spacer rings (**medium-thick spacer ring, thin-spacer ring, medium-thick spacer ring**)

    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/7_place_bot_plate.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Spacer placement. The spacing rings are to ensure the plates and voltage contacts remain in place during testing.
    </p>

#### Step 3: Attaching Detector Window
1. With the MCP cover still on, align the **flange** with the top part of the MCP and ensure to place it on top of the top voltage contact strip.
2. Use the **screwdriver** to secure the **flange** with three screws symmetrically spaced across the flange circumference.
3. Remove the **MCP cover**.
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/8_secure_plates.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Attaching flange to detector
    </p>

{: .warning }
> At this point, ensure that the MCP is fastened and no part is moving. If you notice that any part is not properly secured or a voltage contact point is failing to make contact, redo the appropriate steps.

4. Place the **detector window** on top of the assembled pieces, align the two parts, place the bolts inside, and use the wrenches to secure them in place.
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/9_screw_in_bolts.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Securing the detector and window
    </p>

4. Label MCP serial numbers corresponding to the top and bottom plates and tape note onto the detector.
    <p align:center style="width:60%; margin: auto;">  
      <img src="/assets/img/assembly_webp/10_label.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Labeling the plates in use
    </p>

#### Step 4: Pumping Cart Detector Setup
1. Bring the detector over to the pumping cart.
2. Remove the aluminium foil from the attachment point of the detector and place the detector down, supporting it.
3. Ensuring the detector is stable and upright, attach and secure the c-clamp.
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/11_foil_clamp.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Removing aluminium foil and clamping down detector to pumping cart
    </p>

4. Match the cables on the cart to their labeled input ports on the detector.  
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/12_connect_wires.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Connecting cables to detector
    </p>

#### Step 5: Vacuum Setup
1. Ensure that the main **gate valve**, **bellows valve**, and the **N2 supply valve** are closed. Turn on the **scroll (backing) pump** to lower the system pressure.
2. Open the **gate valve**.
   (Unscrew the locking bolt until loose and turn open the valve. Secure the locking bolt once the valve is open.)

{: .warning }
> At the present step, the scroll pump is pumping out the gas from the detector and the chamber. Ensure that the pressure is below 1 (?) torr before moving on, in order to not damage the turbo pump.

4. Once the system is at <1 torr (?), turn on the **turbo pump** to eliminate residual gas from the system and maintain vacuum.
    <p align:center style="width:60%; margin: auto;">
      <img src="/assets/img/assembly_webp/13_valves_dial.webp" />
    </p>
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Vacuum cart setup
    </p>
