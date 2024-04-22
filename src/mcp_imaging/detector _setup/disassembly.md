---
title: Disassembly
layout: default
nav_order: 2
parent: Detector Setup
grand_parent: MCP Imaging
last_modified_date: March 21st, 2024
---

<link rel="stylesheet" href="/assets/css/main.css">

{: .fs-8 .fw-500}
# Backfilling and Disassembling a Test Detector

{: .fs-5 .fw-300 }
The following page provides an overview of detector build-up of a 33mm MCP detector. Build-up usually occurs in RM125. 

---

## Introduction
{: .fw-700 }

When testing is completed, the pumping cart should be powered down and the detector should be disassembled for safekeeping. The following steps will outline the process for backfilling the system with N2 and test detector disassembly.

<!-- ## Walkthrough Video
{: .fw-700 } -->

## Procedure
{: .fw-700 }
#### Step 0: Workbench Setup
{: .fw-700 }

<br />
<p align:center style="width:60%; margin: auto;">
  <!-- <img src="/assets/img/disassembly/1_cleaning.gif" /> -->
  <img src="/assets/img/disassembly_webp/1_cleaning.webp" />
</p>
<p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
  Cleaning the workbench
</p>

Before we move forwards with breakdown of a detector, ensure that your workbench is appropriately setup for detector disassembly. Clean the bench with a quick isopropanol wipe, and (optionally) place and tape down a clean sheet of aluminum foil. Collect the tools you need for disassembly. Here is a rough guideline of tools you may need:

<p align:center style="width:60%; margin: auto;">
  <img src="/assets/img/disassembly_webp/2_gather_materials.webp" />
</p>
<p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
  Preparing your tools
</p>

| Tools        | Location         |
|:-------------|:------------------|
| T7 Torx wrench | Class 100 Workbench, Tool Rack |
| Dental picks | Class 100 Workbench |
| Tweezers | Class 100 Workbench |
| Petri Dishes | Class 100 Workbench |
| MCP Containers | "MCP UNDER TEST" Container on Class 100 Workbench |
| Wrenches | Class 100 Workbench, Tool Rack |
| Test detector base holder | Class 100 Workbench **OR** N2 Cabinet|
| MCP Cover | Class 100 Workbench, Petri Dishes |

#### Step 1: Disconnecting the Detector
{: .fw-700 }

Before powering down the vacuum pumping setup, we need to disconnect the detector from the test setup. Remove the SHV and SMA cables from the test detector body.

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/3_disconnect_cables_1.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Disconnect SHV Cables
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/3_disconnect_cables_2.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Disconnect SMA cables
    </p>
  </div>
</div>

#### Step 2: Powering Down the Pumping Cart
{: .fw-700 }

{: .warning }
> The turbo pump is designed to bring the system to vacuum once it is already at low pressure, so it is always paired with a backing pump. Spinning the turbopump at atmospheric pressure may wear the blades down, so make sure to follow the order of steps in closing each valve and powering down the system.

1. Close the gate valve (valve 1), which isolates the pump from the chamber. 
2. Power down the turbopump using the turbopump controller. Wait until it has fully spun down to avoid damaging the pump.
3. Power down the scroll pump.

The bellows valve (valve 2) isolates the detector from the chamber and may be left open/closed depending on the configuration of the setup (i. e.: if the pumping cart has two detector attachment points, one may want to leave one detector attached but only test the other one).

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/5_close_valve_1.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Close First Valve
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/6_close_valve_2.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Close Second Valve
    </p>
  </div>
</div>

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/4_turn_off_turbo.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn off Turbopump
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/7_turn_off_scroll.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn off Scroll Pump
    </p>
  </div>
</div>

#### Step 3: Backfilling the Vacuum Setup
{: .fw-700 }

1. Turn on the N2 supply.
2. Open the N2 backfilling/venting valve. Wait until pressure has stabilized.
3. Close the backfilling/venting valve and close the N2 supply line.

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/8_open_nitrogen_valve.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn on Gaseous Nitrogen Valve
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/9_ensure_nitrogen_flowing.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Backfill with Gaseous Nitrogen
    </p>
  </div>
</div>
<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/10_adjust_nitrogen_valve.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn off Gaseous Nitrogen Supply
    </p>
</div>

#### Step 4: Removing the Test Detector
{: .fw-700 }

Once the pumping cart and detector assembly is powered down and backfilled with N2, you can remove the detector from the pumping cart. Locate the C clamp and unscrew until the clamp comes off. Carefully pull off the detector and cover the exposed port with aluminum foil.

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/11_remove_clamp.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Remove C-clamp for detector
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/12_foil_cover.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Remove detector, cover exposed port, and bring detector to workbench
    </p>
  </div>
</div>

#### Step 5: Window Removal
{: .fw-700 }

The test detector can now be place on a Class 100 workbench for disassembly. Remove the silver plated bolts and nuts from the test detector using two **Wrenches**. This process is easier with multiple people. 

{: .warning }
> Once there is only a single bolt left, the front window may come loose and pivot. **Be extra careful at this stage.**

One you have removed the window conflat, place it to the side carefully.

<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/12_unscrew_bolts.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Remove detector window
    </p>
</div>

#### Step 6: Protect and Remove MCP Clamp
{: .fw-700 }
Using the **Test Detector Base Holder**, carefully place the test detector onto it. This helps with assembly/disassembly inconveniences due to detector output SMA connectors, as well as applying unnecessary stress/strain on them. 

Begin by taking the **MCP Cover** and placing it over the exposed MCP. This protects against accidental damage to the fragile plates. 

<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/13_cover_MCP.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Place plate cover over the exposed MCP
    </p>
</div>

Using the **T7 Torx Driver**, unscrew the three (or six) M2 fasteners holding the MCP clamp. Place the screws into a petri dish. Remove the clamping ring from the setup.

<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/13_unscrew_top.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Unscrew top
    </p>
</div>

{: .warning }
> From here on out, you will be working with exposed MCPs. Be very careful with handling tools around the plates, and well as physically handling them. **DO NOT TOUCH THE SURFACE OF THE PLATES**, only touch the edges to prevent contamination and damage. While plates _can_ be cleaned, it is a tedious and time consuming process.

#### Step 7: Remove clamping spacers, leaf spring, and wedge
{: .fw-700 }

Using a **dental pick**, carefully remove the clamping spacers from the detector. Place them into a petri dish. Remove the MCP Cover and place it into a petri dish.

Once again using the **dental pick**, carefully remove the leaf spring from the detector. To best remove the spring, insert the dental pick into the small slot for the MCP Mid voltage, and pull up. To remove the circular wedge, push the part towards the side walls and use the friction against the side wall to pull the wedge up. Be careful to not scratch the MCPs throughout this process.

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/14_remove_metal_rings1.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Keeping the plate cover on, remove the first set of clamping spacers and set them in a petri dish
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/14_remove_metal_rings2.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      With the plate cover off, carefully remove the second set of clamping spacers and set them in a petri dish
    </p>
  </div>
</div>

#### Step 8: Remove and Package TOP MCP
{: .fw-700 }

Using a set of dental picks, push the MCP towards the side walls of the detector. Using little force, push the MCP against the side wall. Then, using friction, pull upwards to pull the MCP upwards. Note that there are certainly other methods to remove the MCP, however this is a proven method that works without touching the surface of the MCP to prevent damage/scratches. 

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/15_prepare_casing_top.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn on Gaseous Nitrogen Valve
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/16_remove_clean_top.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Backfill with Gaseous Nitrogen
    </p>
  </div>
</div>
<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/17_encase_top.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Turn off Gaseous Nitrogen Supply
    </p>
</div>


#### Step 9: Remove and Package BOT MCP
{: .fw-700 }

Similarly, we can remove the **bottom MCP** from the detector. Before attempting removal, use a set of tweezers to keep the mid voltage node out of your work area. Then, approach removal exactly as the **TOP MCP**.

<div class="row">
  <div class="column">
    <img src="/assets/img/disassembly_webp/18_prepare_casing_bot.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      Keeping the plate cover on, remove the first set of clamping spacers and set them in a petri dish
    </p>
  </div>
  <div class="column">
    <img src="/assets/img/disassembly_webp/19_encase_bot.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
      With the plate cover off, carefully remove the second set of clamping spacers and set them in a petri dish
    </p>
  </div>
</div>

#### Step 10: Protect Detector, Store Sensitive Components
{: .fw-700 }

Once the disassembly process is complete, take the time to store all of the sensitive components (**Test Detector** and **MCPs**).

<div align:center style="width:65%; margin: auto;">
    <img src="/assets/img/disassembly_webp/20_put_away.webp" />
    <p align:center style="text-align:center; font-style: italic; font-size:12px; margin: auto;">
    Cover the detector using a glass petri dish, and store the detector and MCPs in the N2 cabinets.
    </p>
</div>

#### Step 11: Clean Workspace
{: .fw-700 }

Return tools to their original locations.