export const T = {
  en: {
    title3d: "3D Production Line",
    title2d: "2D Production Schematic",
    titleIndex: "Factory Floor — Industrial Printing & Label Finishing",
    subtitle: "Hover or tap any machine to learn what it does",
    backToOverview: "Back to Overview",
    bothLines: "Both Lines",
    shrinkSleeve: "Shrink Sleeve",
    boppLabels: "BOPP Labels",
    view2d: "2D View",
    view3d: "3D View",
    resetView: "Reset View",
    stop: "Stop",
    play: "Play",
    speed: "Speed",
    readMore: "Read more",
    notInProduction: "Not in Current Production",
    allEquipment: "All Equipment",
    sleeveFlow: "Shrink Sleeve Flow",
    boppFlow: "BOPP Label Flow",
    open3d: "Open 3D View",
    cameraHint: "Click & drag to orbit — scroll to zoom — right-click to pan — double-click a machine to focus",
    rawFilmIn: "RAW FILM IN",
    shipSleeves: "SHIP SLEEVES",
    shipBopp: "SHIP BOPP",
    example: "Example:",

    stagePrinting: "PRINTING",
    stageInspection: "INSPECTION",
    stageSlitting: "SLITTING",
    stageSeaming: "SEAMING",
    stageFinalCheck: "FINAL CHECK",
    stageIdleZone: "IDLE ZONE",

    legendPrinting: "Printing",
    legendInspection: "Inspection",
    legendSlitting: "Slitting",
    legendSeaming: "Seaming",
    legendUtility: "Utility",
    legendIdle: "Idle",
    legendSleeve: "Sleeve material flow",
    legendBopp: "BOPP material flow",

    stage1: "STAGE 1 — PRINTING",
    stage2: "STAGE 2 — INSPECTION",
    stage3: "STAGE 3 — SLITTING",
    stage4: "STAGE 4 — SEAMING",
    stage5: "STAGE 5 — FINAL CHECK",
    stageUtil: "UTILITY",
    stageIdle: "Idle Equipment \u2014 Not In Current Production",

    badgeActive: "ACTIVE",
    badgeBackup: "BACKUP",
    badgeSecondary: "SECONDARY",
    badgePrimary: "PRIMARY",
    badgeIdle: "IDLE",
    badgeUtility: "UTILITY",
    badgeAlwaysOn: "ALWAYS ON",

    compareTo: "Compare to",
    compTitle: "YAD-K8800 vs YA800 — Printing Press Comparison",
    compManufacturer: "Manufacturer",
    compManualName: "Manual Name",
    compRole: "Role",
    compPrintWidth: "Print Width",
    compSpeed: "Speed",
    compColors: "Colors",
    compPrecision: "Overprint Precision",
    compCylinder: "Cylinder Diameter",
    compRollDia: "Roll Diameter",
    compMaterials: "Materials",
    compFeatures: "Key Features",
    compBestFor: "Best For",
    compSummary: "Summary:",

    machines: {
      yad: {
        label: "Printer",
        role: "High-Speed Gravure Press (Primary)",
        desc: "The main printing machine. Takes plain plastic film and prints all colors/logos using engraved metal cylinders — one cylinder per color. Film passes through each color station until artwork is complete.",
        example: "Like a giant stamp roller with 8 stations. A juice bottle label with 8 colors rolls through all 8 — each stamps a different color. Prints ~2.5 football fields of film per minute."
      },
      ya800: {
        label: "Printer",
        role: "Gravure Press (Backup)",
        desc: "Backup printing press. Same job as the YAD but slower and less precise. Used for shorter runs, simpler jobs, or when main press is busy.",
        example: "If the YAD is a highway printer, this is the reliable city-road printer — handles smaller orders like 5,000 labels instead of 500,000."
      },
      ztm: {
        label: "Quality Check",
        role: "Inspection & Rewind Machine",
        desc: "Quality control machine. Operator checks printed roll at high speed for defects (smudges, color shifts). When a defect is found, machine memorizes the spot, reverses back, operator cuts out the bad section and resplices.",
        example: "Like flipping through a photo album at speed — spot a blurry photo, hit a button, machine rewinds right to it, you rip it out and tape the album back together."
      },
      dfq: {
        label: "Slitter",
        role: "Advanced Slitter (Primary)",
        desc: "Takes a wide printed roll (the \"mother roll\") and slices it lengthwise into multiple narrow rolls. Computer-controlled with touchscreen, remembers settings for 50 materials.",
        example: "A 1,300mm roll with 6 label designs side by side gets cut into 6 narrow rolls — each exactly the right width for one label. Cuts so clean you can't feel the edge."
      },
      wfq: {
        label: "Slitter",
        role: "Slitter (Secondary)",
        desc: "Secondary slitting machine. Same job as DFQ but simpler controls. Runs alongside DFQ for extra capacity, or handles materials that don't need advanced tension control.",
        example: "If the DFQ is the precision surgeon, this is the reliable workhorse — handles standard BOPP label rolls at up to 160 m/min without fuss."
      },
      gshz: {
        label: "Seamer",
        role: "Center-Seal Gluing Machine",
        desc: "Makes shrink sleeves possible. Takes flat narrow printed film and glues one edge over the other to form a continuous tube, wound back onto a roll. Customer later cuts tubes and heat-shrinks them onto bottles.",
        example: "Taking a flat strip of gift wrap and rolling it into a tube, gluing the overlap shut — at 300 meters per minute. The tube becomes the sleeve on a juice or water bottle."
      },
      ztm2: {
        label: "Quality Check",
        role: "Final Sleeve Inspection",
        desc: "Same inspection machine, second use. After film is glued into a tube, it passes through again to check the seam (glue line) is straight, strong, and defect-free before shipping.",
        example: "Proofreading twice — first after writing (print check), then after formatting (seam check). Catches crooked glue lines or weak bonds."
      },
      comp: {
        label: "Air Compressor",
        role: "Compressed Air Supply",
        desc: "Not a production machine — it's utility. Generates compressed air piped to every machine. Powers pneumatic cylinders that clamp rolls, lift rollers, press cylinders, and operate valves.",
        example: "The factory's lungs. Without it, nothing grips, clamps, or moves. Every \"psshh\" sound on the floor is compressed air from this machine."
      },
      polar: {
        label: "Cutter",
        role: "Guillotine Cutter (Idle)",
        desc: "German-made precision guillotine. Cuts stacks of flat sheets to exact sizes. Currently idle because products ship as rolls, not cut sheets.",
        example: "An industrial paper cutter — programmable, cuts through a thick stack in one chop. If the factory sold pre-cut sticker sheets, this would do it."
      },
      qd300: {
        label: "Cross Cutter",
        role: "Cross Cutter (Idle)",
        desc: "Takes a continuous roll and cuts crosswise into individual pieces of set length. Tracks printed marks to cut at exactly the right spot. Optional perforation and heat-seal.",
        example: "Automated scissors cutting a ribbon into exact 100mm pieces at high speed — each cut lands precisely on the printed line. Good for samples, tags, or tamper bands."
      },
      ozm: {
        label: "Bag Maker",
        role: "Bag Machine (Idle)",
        desc: "Completely different product line. Takes plastic film and turns it into sealed bags — cuts film, seals the bottom, stacks finished bags automatically.",
        example: "Makes those clear plastic bags herbs or candy come in — up to 300/minute. If the factory diversified into food packaging, this is ready to go."
      },
      lam: {
        label: "Film Bonder",
        role: "Laminating Machine (Idle)",
        desc: "Bonds two or more film layers into one structure. Could combine printed layer with protective or metallic barrier. Owner confirmed on-site but no manual found.",
        example: "Like laminating a document but at industrial scale with film rolls. Would let the factory produce chip bags or coffee pouches — the biggest untapped growth opportunity."
      }
    },

    readmore: {
      comp: {
        title: "Lupamat — Mi-Series Screw Air Compressor",
        html: "<p>This is <strong>factory utility equipment</strong>, not a label-processing machine. It supplies compressed air to pneumatic cylinders, valves, and air shafts — for example, the air systems that lift rollers, lock cores, or press cylinders against film.</p><div class=\"rm-highlight\">The manual is for <strong>Mi-series compressors, 400V/50Hz</strong>, with maximum working pressure options of <strong>7.5 / 10 / 13 / 15 bar</strong> depending on installed model. Power range: <strong>37–160 kW</strong>.</div><p>Without this machine, nothing on the floor grips, clamps, or moves. Every pneumatic action — roll clamping, tension control, roller lifting — depends on the compressed air it generates.</p>"
      },
      gshz: {
        title: "GSHZ-250 — High-Speed Center-Seal Gluing Machine",
        html: "<p>The GSHZ-250 is the machine that <strong>makes shrink sleeves physically possible</strong>. It takes a flat, narrow, printed film roll and forms it into a continuous tube by overlapping and gluing one edge over the other (center-seal method).</p><div class=\"rm-highlight\"><strong>Speed:</strong> up to 300 m/min &nbsp;|&nbsp; <strong>Film width:</strong> 100–600 mm &nbsp;|&nbsp; <strong>Tube diameter:</strong> 30–190 mm &nbsp;|&nbsp; <strong>Glue method:</strong> solvent-based center seal</div><p>The output is a roll of flattened tubing — identical to the sleeve you see on a bottle of juice, ready for the customer to load onto their sleeve-applicator machine.</p><p>Precision here is critical: if the glue line wanders even 1–2 mm, the sleeve won't sit straight on the bottle. The machine uses a fold guide and tension system to keep the overlap perfectly consistent.</p><div class=\"rm-conclusion\">This machine is the <strong>defining step</strong> of the shrink sleeve product line. BOPP wrap-around labels skip this stage entirely.</div>"
      },
      ztm: {
        title: "ZTM-E1300 — High-Speed Computerized Inspection Machine",
        html: "<p>The ZTM-E1300 is a <strong>rewind-based quality inspection machine</strong>. The operator mounts a finished print roll, runs it at speed, and visually checks for defects — color shifts, smudges, registration errors, or splice marks.</p><div class=\"rm-highlight\"><strong>Max speed:</strong> 300 m/min &nbsp;|&nbsp; <strong>Max roll width:</strong> 1,300 mm &nbsp;|&nbsp; <strong>Roll diameter:</strong> up to 800 mm &nbsp;|&nbsp; <strong>Tension control:</strong> automatic closed-loop</div><p>Key feature: the machine has a <strong>defect-marking and auto-reverse system</strong>. When the operator spots a flaw, they press a button — the machine logs the position, finishes the roll, then automatically rewinds back to exactly that spot for repair. The operator cuts out the bad section and splices the roll back together.</p><p>It also counts running meters and logs splice positions, so the customer receives a roll with a known defect map.</p><div class=\"rm-conclusion\">Used twice in production: once after printing (print inspection), and again after seaming (seam/glue inspection on finished sleeves).</div>"
      },
      ztm2: {
        title: "ZTM-E1300 (Unit 2) — Final Sleeve Inspection",
        html: "<p>This is the <strong>same ZTM-E1300 inspection machine</strong> used a second time at the end of the shrink sleeve line. After the GSHZ seamer creates the tubing, this unit checks the finished sleeve roll before it ships.</p><div class=\"rm-highlight\">At this stage the machine is checking the <strong>glue seam</strong>: is it straight? Is the overlap consistent? Are there bubbles, open seams, or contamination in the glue line?</div><p>The output of this check is the final, customer-ready roll. Any defective sections found here are cut out and the roll is respliced, just as in the post-print inspection.</p><div class=\"rm-conclusion\">This step closes the quality loop for sleeves. A roll that passes here ships directly to the customer's bottling line.</div>"
      },
      dfq: {
        title: "Wity Machinery — DFQ1300C3-3 Computerized High-Speed Slitter",
        html: "<p>The DFQ1300C3-3 is the <strong>primary slitting machine</strong>. It takes the full-width \"mother roll\" from the printer and slices it lengthwise into multiple narrow rolls — each exactly the width needed for one label design.</p><div class=\"rm-highlight\"><strong>Max speed:</strong> 300 m/min &nbsp;|&nbsp; <strong>Max unwind width:</strong> 1,300 mm &nbsp;|&nbsp; <strong>Slitting method:</strong> razor / shear / crush (selectable) &nbsp;|&nbsp; <strong>Material memory:</strong> 50 presets &nbsp;|&nbsp; <strong>Tension control:</strong> automatic closed-loop with EPC edge guide</div><p>The touchscreen controller lets operators save material profiles — so switching between BOPP and shrink film doesn't require manual re-tuning. The EPC (Edge Position Control) keeps the film perfectly centered on each blade.</p><p>It handles both product lines: wide rolls of BOPP wrap-around label film and shrink sleeve film are both slit here before their respective downstream steps.</p><div class=\"rm-conclusion\">This machine directly determines the dimensional accuracy of every finished label roll. A 0.5 mm slitting error becomes a misaligned label on every single bottle.</div>"
      },
      wfq: {
        title: "WITY Machinery — WFQ1000/WFQ1300 Microcomputer Automatic Slitter",
        html: "<p>The WFQ series is the <strong>secondary slitting machine</strong>, running alongside the DFQ for extra capacity or handling jobs where the advanced tension and EPC features of the DFQ aren't required.</p><div class=\"rm-highlight\"><strong>Max speed:</strong> 160 m/min &nbsp;|&nbsp; <strong>Available widths:</strong> WFQ1000 (1,000 mm) / WFQ1300 (1,300 mm) &nbsp;|&nbsp; <strong>Slitting method:</strong> razor or circular blade &nbsp;|&nbsp; <strong>Control:</strong> microcomputer with digital tension display</div><p>Its microcomputer controller handles automatic tension correction and counts meters/footage for each slit roll. Simpler interface than the DFQ but fully capable for standard BOPP label slitting runs.</p><div class=\"rm-conclusion\">Adds throughput flexibility — when both DFQ and WFQ run simultaneously, the factory can slit two different jobs or one very large job in parallel.</div>"
      },
      yad: {
        title: "WITY / Jinghua — YAD-K8800 High-Speed Automatic Gravure Press",
        html: "<p>The YAD-K8800 is the <strong>primary production machine</strong> for the entire factory. It performs rotogravure printing — ink is held in microscopic engraved cells on a metal cylinder, transferred directly to plastic film as it passes under each color station.</p><div class=\"rm-highlight\"><strong>Print width:</strong> up to 880 mm &nbsp;|&nbsp; <strong>Speed:</strong> up to 150 m/min &nbsp;|&nbsp; <strong>Colors:</strong> up to 8 &nbsp;|&nbsp; <strong>Overprint precision:</strong> ±0.1 mm &nbsp;|&nbsp; <strong>Cylinder diameter:</strong> 100–350 mm &nbsp;|&nbsp; <strong>Materials:</strong> BOPP, PET, PVC, CPP, PE, OPP, nylon</div><p>Each color station has its own ink trough, doctor blade (wipes excess ink off the cylinder), drying tunnel, and registration system. The film threads through all stations in one continuous pass.</p><p>The machine uses an <strong>automatic register control system</strong> — cameras continuously monitor alignment marks and micro-adjust each cylinder's position in real time, keeping all 8 colors in perfect register even as the film stretches at speed.</p><div class=\"rm-conclusion\">This single machine defines the factory's capacity ceiling. Its uptime, setup time, and cylinder change time are the primary production scheduling variables.</div>"
      },
      ya800: {
        title: "WITY Machinery — YA800 Gravure Printing Machine",
        html: "<p>The YA800 is the <strong>backup gravure press</strong>. It performs the same rotogravure printing process as the YAD-K8800 but at lower speed and with less advanced automation.</p><div class=\"rm-highlight\"><strong>Print width:</strong> up to 800 mm &nbsp;|&nbsp; <strong>Speed:</strong> up to 100 m/min &nbsp;|&nbsp; <strong>Colors:</strong> up to 8 &nbsp;|&nbsp; <strong>Overprint precision:</strong> ±0.2 mm &nbsp;|&nbsp; <strong>Materials:</strong> BOPP, PET, PVC, PE, OPP</div><p>The YA800 uses <strong>manual register adjustment</strong> rather than the YAD's automatic camera system — the operator must manually fine-tune color alignment during setup and periodically during a run. This makes it slower to set up and more dependent on operator skill.</p><p>Its role in production: handles short runs that don't justify setting up the YAD, runs simpler designs (fewer colors, less precision required), or provides overflow capacity when the YAD is occupied with a long job.</p><div class=\"rm-conclusion\">The YAD vs YA800 choice comes down to run length and complexity. Short or simple jobs go to the YA800; high-volume or tight-register jobs go to the YAD.</div>"
      },
      qd300: {
        title: "WITY Machinery — QD-300 Microcomputer Automatic Cross Cutter",
        html: "<p>The QD-300 is a <strong>cross-cutting machine</strong> — it takes a continuous printed roll and cuts it perpendicular to the film direction into individual flat pieces of a set length.</p><div class=\"rm-highlight\"><strong>Cutting length:</strong> 50–500 mm (adjustable) &nbsp;|&nbsp; <strong>Max speed:</strong> 150 cuts/min &nbsp;|&nbsp; <strong>Max film width:</strong> 300 mm &nbsp;|&nbsp; <strong>Registration:</strong> optical mark tracking &nbsp;|&nbsp; <strong>Options:</strong> perforation blade, heat-seal bar</div><p>The machine reads <strong>printed registration marks</strong> (small marks added during printing) to ensure each cut lands at exactly the right position relative to the design — not just at a fixed interval. This is critical when designs have variable bleed or where the cut must fall on a specific printed line.</p><p>Currently idle because the factory's two products (shrink sleeves and BOPP wrap-arounds) both ship as rolls, not individual cut pieces. This machine would activate if the factory took on cut-sheet label orders, sample booklets, or tamper-evident band production.</p><div class=\"rm-conclusion\">Ready to unlock cut-sheet or individual label formats with no new investment required.</div>"
      },
      ozm: {
        title: "OZM-55 LS — Detailed Analysis",
        html: "<p>The OZM-55 LS is a <strong>plastic bag making machine</strong> — a completely separate product category from labels. It takes a roll of flat plastic film and converts it into finished, sealed bags ready for retail or industrial use.</p><div class=\"rm-highlight\"><strong>Output:</strong> up to 300 bags/min &nbsp;|&nbsp; <strong>Bag types:</strong> bottom-seal, side-seal &nbsp;|&nbsp; <strong>Film types:</strong> LDPE, HDPE, CPP, OPP &nbsp;|&nbsp; <strong>Max film width:</strong> 550 mm &nbsp;|&nbsp; <strong>Sealing method:</strong> heat seal</div><p>The machine performs three operations in one pass: it folds or tubes the flat film, heat-seals the bottom edge to create the bag pocket, then cuts the bag to length. Finished bags are stacked automatically by the output conveyor.</p><p>This machine is currently idle because the factory focuses entirely on printed label rolls. Activating it would require sourcing plain or printed film in appropriate widths and finding bag-buying customers — a different sales channel from label buyers.</p><div class=\"rm-conclusion\">Represents a ready-made diversification path into flexible packaging without capital investment. The constraint is commercial (finding bag customers), not technical.</div>"
      },
      polar: {
        title: "Polar Mohr 76 — Guillotine Cutter",
        html: "<p>The Polar Mohr 76 is a <strong>precision programmable guillotine cutter</strong> made in Germany. It cuts stacks of flat sheet material — paper, film, board — to exact dimensions with a single downward blade stroke.</p><div class=\"rm-highlight\"><strong>Cutting width:</strong> 760 mm &nbsp;|&nbsp; <strong>Cutting height:</strong> up to 80 mm stack &nbsp;|&nbsp; <strong>Positioning accuracy:</strong> ±0.1 mm &nbsp;|&nbsp; <strong>Control:</strong> programmable backstop with job memory &nbsp;|&nbsp; <strong>Origin:</strong> Germany (Polar Mohr)</div><p>The programmable backstop allows operators to pre-enter a sequence of cut positions — the machine automatically advances the material to each position. This enables complex multi-cut jobs (e.g., cut a sheet into 6 different sizes) to run without manual measurement between cuts.</p><p>Currently idle because both products ship as rolls. This machine would be needed if the factory produced <strong>flat sheet labels, booklets, folding cartons, or pre-cut sticker sheets</strong>. It could also be used to produce sample books or cut down roll-end waste into usable flat stock.</p><div class=\"rm-conclusion\">High-value German equipment currently generating zero return. The clearest activation path is offering cut-to-size flat label sheets as an add-on product.</div>"
      },
      lam: {
        title: "Laminator — Film Bonder",
        html: "<p>The laminating machine <strong>bonds two or more film layers together</strong> into a single composite structure. In label and flexible packaging production, lamination is used to combine a printed outer layer with a functional inner layer — such as a barrier film, metallic foil, or heat-seal layer.</p><div class=\"rm-highlight\">Owner confirmed the machine is on-site. <strong>No manual or specification sheet was found</strong> in the document dump. Technical details (speed, width, lamination method) are unconfirmed and require physical verification.</div><p>Possible lamination methods this type of machine could use: <strong>dry lamination</strong> (adhesive applied, dried, then bonded under heat/pressure), <strong>wet lamination</strong> (water-based adhesive), or <strong>extrusion lamination</strong> (molten plastic layer bonded between films).</p><p>If operational, this machine would enable the factory to produce <strong>multi-layer flexible packaging</strong> — chip bags, coffee pouches, retort pouches, or laminated label stock. These products command significantly higher margins than plain printed film.</p><div class=\"rm-conclusion\">Potentially the most strategically valuable idle asset. Requires manual/spec verification before any production planning. If confirmed operational, unlocks the highest-margin product category available with current equipment.</div>"
      }
    }
  },

  ka: {
    title3d: "3D საწარმოო ხაზი",
    title2d: "2D საწარმოო სქემა",
    titleIndex: "საწარმოო სართული — სამრეწველო ბეჭდვა და ეტიკეტირება",
    subtitle: "გადაატარეთ კურსორი ნებისმიერ მანქანაზე მისი ფუნქციის გასაგებად",
    backToOverview: "მიმოხილვა",
    bothLines: "ორივე ხაზი",
    shrinkSleeve: "შეკუმშვადი სლივი",
    boppLabels: "BOPP ეტიკეტები",
    view2d: "2D ხედი",
    view3d: "3D ხედი",
    resetView: "ხედის აღდგენა",
    stop: "გაჩერება",
    play: "დაწყება",
    speed: "სიჩქარე",
    readMore: "ვრცლად",
    notInProduction: "არ მონაწილეობს წარმოებაში",
    allEquipment: "ყველა აღჭურვილობა",
    sleeveFlow: "შეკუმშვადი სლივის ხაზი",
    boppFlow: "BOPP ეტიკეტის ხაზი",
    open3d: "3D ხედის გახსნა",
    cameraHint: "დააჭირეთ და გადაათრიეთ ბრუნვისთვის — სქროლი მასშტაბისთვის — მარჯვენა ღილაკი გადაადგილებისთვის — ორჯერ დააჭირეთ მანქანაზე ფოკუსირებისთვის",
    rawFilmIn: "ნედლი ფილმი",
    shipSleeves: "სლივების გაგზავნა",
    shipBopp: "BOPP გაგზავნა",
    example: "მაგალითი:",

    stagePrinting: "ბეჭდვა",
    stageInspection: "შემოწმება",
    stageSlitting: "დაჭრა",
    stageSeaming: "შეკერვა",
    stageFinalCheck: "საბოლოო შემოწმება",
    stageIdleZone: "უმოქმედო ზონა",

    legendPrinting: "ბეჭდვა",
    legendInspection: "შემოწმება",
    legendSlitting: "დაჭრა",
    legendSeaming: "შეკერვა",
    legendUtility: "კომუნალური",
    legendIdle: "უმოქმედო",
    legendSleeve: "სლივის მასალის ნაკადი",
    legendBopp: "BOPP მასალის ნაკადი",

    stage1: "ეტაპი 1 — ბეჭდვა",
    stage2: "ეტაპი 2 — შემოწმება",
    stage3: "ეტაპი 3 — დაჭრა",
    stage4: "ეტაპი 4 — შეკერვა",
    stage5: "ეტაპი 5 — საბოლოო შემოწმება",
    stageUtil: "კომუნალური",
    stageIdle: "უმოქმედო აღჭურვილობა — არ მონაწილეობს წარმოებაში",

    badgeActive: "აქტიური",
    badgeBackup: "სარეზერვო",
    badgeSecondary: "მეორადი",
    badgePrimary: "ძირითადი",
    badgeIdle: "უმოქმედო",
    badgeUtility: "კომუნალური",
    badgeAlwaysOn: "მუდამ ჩართული",

    compareTo: "შედარება",
    compTitle: "YAD-K8800 vs YA800 — საბეჭდი პრესების შედარება",
    compManufacturer: "მწარმოებელი",
    compManualName: "სახელმძღვანელოს სახელი",
    compRole: "როლი",
    compPrintWidth: "ბეჭდვის სიგანე",
    compSpeed: "სიჩქარე",
    compColors: "ფერები",
    compPrecision: "ბეჭდვის სიზუსტე",
    compCylinder: "ცილინდრის დიამეტრი",
    compRollDia: "რულონის დიამეტრი",
    compMaterials: "მასალები",
    compFeatures: "ძირითადი მახასიათებლები",
    compBestFor: "საუკეთესოა",
    compSummary: "შეჯამება:",

    machines: {
      yad: {
        label: "პრინტერი",
        role: "მაღალსიჩქარიანი გრავიურული პრესი (ძირითადი)",
        desc: "ძირითადი საბეჭდი მანქანა. იღებს უბრალო პლასტიკურ ფილმს და ბეჭდავს ყველა ფერს/ლოგოს გრავირებული მეტალის ცილინდრების გამოყენებით — თითოეული ცილინდრი ერთ ფერს. ფილმი გადის თითოეულ ფერის სადგურზე, სანამ ნახატი არ დასრულდება.",
        example: "როგორც გიგანტური საბეჭდი ლილვი 8 სადგურით. წვენის ბოთლის ეტიკეტი 8 ფერით გადის ყველა 8 სადგურს — თითოეული ბეჭდავს სხვა ფერს. ბეჭდავს ~2.5 საფეხბურთო მოედნის ფილმს წუთში."
      },
      ya800: {
        label: "პრინტერი",
        role: "გრავიურული პრესი (სარეზერვო)",
        desc: "სარეზერვო საბეჭდი პრესი. იგივე ფუნქცია რაც YAD-ს, მაგრამ უფრო ნელი და ნაკლებად ზუსტი. გამოიყენება მოკლე ტირაჟებისთვის, მარტივი სამუშაოებისთვის, ან როცა ძირითადი პრესი დაკავებულია.",
        example: "თუ YAD არის ავტომაგისტრალის პრინტერი, ეს არის საიმედო საქალაქო გზის პრინტერი — ამუშავებს მცირე შეკვეთებს, მაგალითად 5,000 ეტიკეტს 500,000-ის ნაცვლად."
      },
      ztm: {
        label: "ხარისხის შემოწმება",
        role: "შემოწმებისა და გადახვევის მანქანა",
        desc: "ხარისხის კონტროლის მანქანა. ოპერატორი ამოწმებს დაბეჭდილ რულონს მაღალი სიჩქარით დეფექტებზე (ლაქები, ფერის გადახრები). დეფექტის აღმოჩენისას მანქანა იმახსოვრებს ადგილს, უკან ბრუნდება, ოპერატორი ჭრის ცუდ მონაკვეთს და ხელახლა აერთებს.",
        example: "როგორც ფოტოალბომის სწრაფად გადაფურცვლა — შენიშნავთ ბუნდოვან ფოტოს, აჭერთ ღილაკს, მანქანა პირდაპირ იქ ბრუნდება, ამოიღებთ და ალბომს ისევ აწებებთ."
      },
      dfq: {
        label: "საჭრელი",
        role: "მოწინავე საჭრელი (ძირითადი)",
        desc: "იღებს ფართო დაბეჭდილ რულონს (\"დედა რულონი\") და ჭრის გრძლობრივად რამდენიმე ვიწრო რულონად. კომპიუტერით მართული სენსორული ეკრანით, იმახსოვრებს 50 მასალის პარამეტრებს.",
        example: "1,300მმ რულონი 6 ეტიკეტის დიზაინით გვერდიგვერდ იჭრება 6 ვიწრო რულონად — თითოეული ზუსტად სწორი სიგანის ერთი ეტიკეტისთვის. ისე სუფთად ჭრის, რომ კიდეს ვერ შეიგრძნობთ."
      },
      wfq: {
        label: "საჭრელი",
        role: "საჭრელი (მეორადი)",
        desc: "მეორადი საჭრელი მანქანა. იგივე ფუნქცია რაც DFQ-ს, მაგრამ უფრო მარტივი მართვით. მუშაობს DFQ-ს პარალელურად დამატებითი სიმძლავრისთვის.",
        example: "თუ DFQ არის ზუსტი ქირურგი, ეს არის საიმედო მუშა ცხენი — ამუშავებს სტანდარტულ BOPP ეტიკეტის რულონებს 160 მ/წთ სიჩქარემდე."
      },
      gshz: {
        label: "შემკერავი",
        role: "ცენტრალური შეწებების მანქანა",
        desc: "შეკუმშვადი სლივების წარმოებას შესაძლებელს ხდის. იღებს ბრტყელ ვიწრო დაბეჭდილ ფილმს და აწებებს ერთ კიდეს მეორეზე უწყვეტი მილის შესაქმნელად. მომხმარებელი შემდეგ ჭრის მილებს და თბურად კუმშავს ბოთლებზე.",
        example: "წარმოიდგინეთ საჩუქრის ქაღალდის ბრტყელი ზოლის მილად დახვევა და გადაფარვის შეწებება — 300 მეტრი წუთში. მილი ხდება სლივი წვენის ან წყლის ბოთლზე."
      },
      ztm2: {
        label: "ხარისხის შემოწმება",
        role: "სლივის საბოლოო შემოწმება",
        desc: "იგივე შემოწმების მანქანა, მეორე გამოყენება. ფილმის მილად შეწებების შემდეგ, ხელახლა გადის შემოწმებას ნაკერის (წებოს ხაზის) სისწორის, სიმტკიცისა და დეფექტების არარსებობის დასადასტურებლად.",
        example: "ორჯერ კორექტურა — ჯერ დაწერის შემდეგ (ბეჭდვის შემოწმება), შემდეგ ფორმატირების შემდეგ (ნაკერის შემოწმება). აღმოაჩენს მრუდე წებოს ხაზებს ან სუსტ შეერთებებს."
      },
      comp: {
        label: "ჰაერის კომპრესორი",
        role: "შეკუმშული ჰაერის მიწოდება",
        desc: "არა საწარმოო მანქანა — კომუნალურია. გამოიმუშავებს შეკუმშულ ჰაერს, რომელიც მილებით მიეწოდება ყველა მანქანას. აძლიერებს პნევმატიკურ ცილინდრებს, რომლებიც აფიქსირებენ რულონებს, წევენ ლილვებს და მართავენ სარქველებს.",
        example: "ქარხნის ფილტვები. მის გარეშე არაფერი იჭერს, აფიქსირებს ან მოძრაობს. ყოველი \"პშშ\" ხმა საწარმოში ამ მანქანის შეკუმშული ჰაერია."
      },
      polar: {
        label: "საჭრელი",
        role: "გილიოტინური საჭრელი (უმოქმედო)",
        desc: "გერმანული წარმოების ზუსტი გილიოტინა. ჭრის ბრტყელი ფურცლების წყობას ზუსტი ზომებით. ამჟამად უმოქმედოა, რადგან პროდუქცია რულონებად იგზავნება, არა დაჭრილი ფურცლებით.",
        example: "სამრეწველო ქაღალდის საჭრელი — პროგრამირებადი, ერთი დარტყმით ჭრის სქელ წყობას. თუ ქარხანა გაყიდის წინასწარ დაჭრილ სტიკერების ფურცლებს, ეს მანქანა შეასრულებს."
      },
      qd300: {
        label: "განივი საჭრელი",
        role: "განივი საჭრელი (უმოქმედო)",
        desc: "იღებს უწყვეტ რულონს და ჭრის განივად ცალკეულ ნაჭრებად დადგენილი სიგრძით. თვალყურს ადევნებს დაბეჭდილ ნიშნებს ზუსტად საჭირო ადგილას დასაჭრელად. არჩევითი პერფორაცია და თბური ლუქი.",
        example: "ავტომატური მაკრატელი, რომელიც ჭრის ლენტს ზუსტად 100მმ ნაჭრებად მაღალი სიჩქარით — თითოეული ჭრა ზუსტად დაბეჭდილ ხაზზე ხვდება. კარგია ნიმუშებისთვის, ეტიკეტებისთვის ან დამცავი ზოლებისთვის."
      },
      ozm: {
        label: "პაკეტების მწარმოებელი",
        role: "პაკეტების მანქანა (უმოქმედო)",
        desc: "სრულიად განსხვავებული პროდუქციის ხაზი. იღებს პლასტიკურ ფილმს და გადააქცევს დალუქულ პაკეტებად — ჭრის ფილმს, ლუქავს ფსკერს, ავტომატურად აწყობს მზა პაკეტებს.",
        example: "აწარმოებს იმ გამჭვირვალე პლასტიკურ პაკეტებს, რომლებშიც მწვანილი ან ტკბილეული მოდის — წუთში 300-მდე. თუ ქარხანა სასურსათო შეფუთვაში გაფართოვდება, ეს მზადაა."
      },
      lam: {
        label: "ფილმის შემაერთებელი",
        role: "ლამინირების მანქანა (უმოქმედო)",
        desc: "აერთებს ორ ან მეტ ფილმის ფენას ერთ სტრუქტურაში. შეუძლია დაბეჭდილი ფენის შეერთება დამცავ ან მეტალურ ბარიერულ ფენასთან. მფლობელმა დაადასტურა ადგილზე ყოფნა, მაგრამ სახელმძღვანელო ვერ მოიძებნა.",
        example: "როგორც დოკუმენტის ლამინირება, მაგრამ სამრეწველო მასშტაბით ფილმის რულონებით. საშუალებას მისცემს ქარხანას აწარმოოს ჩიფსის პაკეტები ან ყავის პარკები — ყველაზე დიდი გამოუყენებელი ზრდის შესაძლებლობა."
      }
    },

    readmore: {
      comp: {
        title: "Lupamat — Mi-სერიის ხრახნიანი ჰაერის კომპრესორი",
        html: "<p>ეს არის <strong>ქარხნის კომუნალური აღჭურვილობა</strong>, არა ეტიკეტების დამამუშავებელი მანქანა. ის მიაწვდის შეკუმშულ ჰაერს პნევმატიკურ ცილინდრებს, სარქველებს და ჰაერის ლილვებს — მაგალითად, ჰაერის სისტემები, რომლებიც წევენ ლილვებს, აფიქსირებენ ბირთვებს ან აჭერენ ცილინდრებს ფილმზე.</p><div class=\"rm-highlight\">სახელმძღვანელო არის <strong>Mi-სერიის კომპრესორებისთვის, 400V/50Hz</strong>, მაქსიმალური სამუშაო წნევის ვარიანტებით <strong>7.5 / 10 / 13 / 15 ბარი</strong> დაინსტალირებული მოდელის მიხედვით. სიმძლავრის დიაპაზონი: <strong>37–160 კვტ</strong>.</div><p>ამ მანქანის გარეშე საწარმოში არაფერი იჭერს, აფიქსირებს ან მოძრაობს. ყველა პნევმატიკური მოქმედება — რულონის დაჭერა, დაძაბვის კონტროლი, ლილვის აწევა — დამოკიდებულია მის მიერ გამომუშავებულ შეკუმშულ ჰაერზე.</p>"
      },
      gshz: {
        title: "GSHZ-250 — მაღალსიჩქარიანი ცენტრალური შეწებების მანქანა",
        html: "<p>GSHZ-250 არის მანქანა, რომელიც <strong>შეკუმშვადი სლივების წარმოებას ფიზიკურად შესაძლებელს ხდის</strong>. იღებს ბრტყელ, ვიწრო, დაბეჭდილ ფილმის რულონს და ქმნის მისგან უწყვეტ მილს ერთი კიდის მეორეზე გადაფარვით და შეწებებით (ცენტრალური ლუქის მეთოდი).</p><div class=\"rm-highlight\"><strong>სიჩქარე:</strong> 300 მ/წთ-მდე &nbsp;|&nbsp; <strong>ფილმის სიგანე:</strong> 100–600 მმ &nbsp;|&nbsp; <strong>მილის დიამეტრი:</strong> 30–190 მმ &nbsp;|&nbsp; <strong>წებოს მეთოდი:</strong> გამხსნელზე დაფუძნებული ცენტრალური ლუქი</div><p>გამომავალი პროდუქტი არის გაბრტყელებული მილის რულონი — ზუსტად ისეთი სლივი, როგორსაც ბოთლზე ხედავთ, მომხმარებლის სლივის აპლიკატორ მანქანაში ჩასატვირთად მზადი.</p><p>სიზუსტე აქ კრიტიკულია: თუ წებოს ხაზი 1–2 მმ-ითაც გადაიხრება, სლივი ბოთლზე სწორად არ დაჯდება. მანქანა იყენებს ნაკეცის მიმართულ სისტემას და დაჭიმვის კონტროლს გადაფარვის სრულყოფილი სიმეტრიისთვის.</p><div class=\"rm-conclusion\">ეს მანქანა არის <strong>განმსაზღვრელი ეტაპი</strong> შეკუმშვადი სლივის პროდუქციის ხაზში. BOPP გახვევის ეტიკეტები ამ ეტაპს სრულად გამოტოვებენ.</div>"
      },
      ztm: {
        title: "ZTM-E1300 — მაღალსიჩქარიანი კომპიუტერული შემოწმების მანქანა",
        html: "<p>ZTM-E1300 არის <strong>გადახვევაზე დაფუძნებული ხარისხის შემოწმების მანქანა</strong>. ოპერატორი დებს მზა ბეჭდვის რულონს, გაუშვებს სიჩქარეზე და ვიზუალურად ამოწმებს დეფექტებზე — ფერის გადახრები, ლაქები, რეგისტრაციის შეცდომები ან შეერთების ნიშნები.</p><div class=\"rm-highlight\"><strong>მაქს. სიჩქარე:</strong> 300 მ/წთ &nbsp;|&nbsp; <strong>მაქს. რულონის სიგანე:</strong> 1,300 მმ &nbsp;|&nbsp; <strong>რულონის დიამეტრი:</strong> 800 მმ-მდე &nbsp;|&nbsp; <strong>დაჭიმვის კონტროლი:</strong> ავტომატური დახურული კონტური</div><p>მთავარი თვისება: მანქანას აქვს <strong>დეფექტის მონიშვნისა და ავტომატური უკუქცევის სისტემა</strong>. ოპერატორის მიერ ხარვეზის შენიშვნისას, ღილაკის დაჭერით მანქანა ჩაიწერს პოზიციას, დაასრულებს რულონს, შემდეგ ავტომატურად დაბრუნდება ზუსტად იმ ადგილზე შესაკეთებლად. ოპერატორი ჭრის ცუდ მონაკვეთს და ხელახლა აერთებს რულონს.</p><p>ასევე ითვლის სვლის მეტრებს და ჩაიწერს შეერთების პოზიციებს, ასე რომ მომხმარებელი იღებს რულონს ცნობილი დეფექტის რუქით.</p><div class=\"rm-conclusion\">გამოიყენება წარმოებაში ორჯერ: ერთხელ ბეჭდვის შემდეგ (ბეჭდვის შემოწმება), და ისევ შეკერვის შემდეგ (მზა სლივებზე ნაკერის/წებოს შემოწმება).</div>"
      },
      ztm2: {
        title: "ZTM-E1300 (მე-2 ერთეული) — სლივის საბოლოო შემოწმება",
        html: "<p>ეს არის <strong>იგივე ZTM-E1300 შემოწმების მანქანა</strong>, გამოყენებული მეორედ შეკუმშვადი სლივის ხაზის ბოლოს. GSHZ შემკერავის მიერ მილის შექმნის შემდეგ, ეს ერთეული ამოწმებს მზა სლივის რულონს გაგზავნამდე.</p><div class=\"rm-highlight\">ამ ეტაპზე მანქანა ამოწმებს <strong>წებოს ნაკერს</strong>: სწორია? გადაფარვა თანმიმდევრულია? არის ბუშტები, ღია ნაკერები ან დაბინძურება წებოს ხაზში?</div><p>ამ შემოწმების გამომავალი პროდუქტი არის საბოლოო, მომხმარებლისთვის მზადი რულონი. აქ ნაპოვნი ნებისმიერი დეფექტური მონაკვეთი ამოიჭრება და რულონი ხელახლა შეერთდება, ისევე როგორც ბეჭდვის შემდგომ შემოწმებაში.</p><div class=\"rm-conclusion\">ეს ეტაპი ხურავს სლივების ხარისხის კონტროლის წრეს. რულონი, რომელიც ამ ეტაპს გაივლის, პირდაპირ მომხმარებლის ბოთლების ხაზზე იგზავნება.</div>"
      },
      dfq: {
        title: "Wity Machinery — DFQ1300C3-3 კომპიუტერული მაღალსიჩქარიანი საჭრელი",
        html: "<p>DFQ1300C3-3 არის <strong>ძირითადი საჭრელი მანქანა</strong>. იღებს პრინტერიდან სრული სიგანის \"დედა რულონს\" და ჭრის მას გრძლობრივად რამდენიმე ვიწრო რულონად — თითოეული ზუსტად ერთი ეტიკეტის დიზაინისთვის საჭირო სიგანის.</p><div class=\"rm-highlight\"><strong>მაქს. სიჩქარე:</strong> 300 მ/წთ &nbsp;|&nbsp; <strong>მაქს. გაშლის სიგანე:</strong> 1,300 მმ &nbsp;|&nbsp; <strong>ჭრის მეთოდი:</strong> სამართებელი / მაკრატელი / კლდე (შერჩევადი) &nbsp;|&nbsp; <strong>მასალის მეხსიერება:</strong> 50 წინასწარი პარამეტრი &nbsp;|&nbsp; <strong>დაჭიმვის კონტროლი:</strong> ავტომატური დახურული კონტური EPC კიდის მიმართულებით</div><p>სენსორული ეკრანის კონტროლერი ოპერატორებს საშუალებას აძლევს შეინახონ მასალის პროფილები — ამიტომ BOPP-სა და შეკუმშვადი ფილმის შორის გადართვა მოითხოვს ხელით ხელახლა-კონფიგურაციას. EPC (კიდის პოზიციის კონტროლი) ინარჩუნებს ფილმს სრულყოფილ ცენტრში თითოეულ პირზე.</p><p>ამუშავებს ორივე პროდუქციის ხაზს: BOPP გახვევის ეტიკეტის ფილმის ფართო რულონები და შეკუმშვადი სლივის ფილმი ორივე ჭრება აქ მათი შემდგომ ეტაპებამდე.</p><div class=\"rm-conclusion\">ეს მანქანა პირდაპირ განსაზღვრავს ყველა მზა ეტიკეტის რულონის განზომილებრივ სიზუსტეს. 0.5 მმ ჭრის შეცდომა ყოველ ბოთლზე გადაადგილებული ეტიკეტი ხდება.</div>"
      },
      wfq: {
        title: "WITY Machinery — WFQ1000/WFQ1300 მიკროკომპიუტერული ავტომატური საჭრელი",
        html: "<p>WFQ სერია არის <strong>მეორადი საჭრელი მანქანა</strong>, მუშაობს DFQ-ს გვერდით დამატებითი სიმძლავრისთვის ან ამუშავებს სამუშაოებს, სადაც DFQ-ს მოწინავე დაჭიმვისა და EPC ფუნქციები საჭირო არ არის.</p><div class=\"rm-highlight\"><strong>მაქს. სიჩქარე:</strong> 160 მ/წთ &nbsp;|&nbsp; <strong>ხელმისაწვდომი სიგანეები:</strong> WFQ1000 (1,000 მმ) / WFQ1300 (1,300 მმ) &nbsp;|&nbsp; <strong>ჭრის მეთოდი:</strong> სამართებელი ან წრიული პირი &nbsp;|&nbsp; <strong>კონტროლი:</strong> მიკროკომპიუტერი ციფრული დაჭიმვის ეკრანით</div><p>მისი მიკროკომპიუტერის კონტროლერი ამუშავებს ავტომატური დაჭიმვის კორექტირებას და ითვლის მეტრებს/ფუტებს თითოეული დაჭრილი რულონისთვის. DFQ-ზე უფრო მარტივი ინტერფეისი, მაგრამ სრულად შესაფერისი სტანდარტული BOPP ეტიკეტების ჭრის სამუშაოებისთვის.</p><div class=\"rm-conclusion\">ამატებს გამტარუნარიანობის მოქნილობას — როდესაც DFQ და WFQ ერთდროულად მუშაობს, ქარხანას შეუძლია ორი განსხვავებული სამუშაოს ან ერთი ძალიან დიდი სამუშაოს პარალელური ჭრა.</div>"
      },
      yad: {
        title: "WITY / Jinghua — YAD-K8800 მაღალსიჩქარიანი ავტომატური გრავიურული პრესი",
        html: "<p>YAD-K8800 არის მთელი ქარხნის <strong>ძირითადი საწარმოო მანქანა</strong>. ასრულებს როტოგრავიურულ ბეჭდვას — მელანი ინახება მეტალის ცილინდრზე მიკროსკოპული გრავირებული უჯრედებში, გადაეცემა პლასტიკურ ფილმს პირდაპირ, როდესაც ის თითოეული ფერის სადგურს გაივლის.</p><div class=\"rm-highlight\"><strong>ბეჭდვის სიგანე:</strong> 880 მმ-მდე &nbsp;|&nbsp; <strong>სიჩქარე:</strong> 150 მ/წთ-მდე &nbsp;|&nbsp; <strong>ფერები:</strong> 8-მდე &nbsp;|&nbsp; <strong>ბეჭდვის სიზუსტე:</strong> ±0.1 მმ &nbsp;|&nbsp; <strong>ცილინდრის დიამეტრი:</strong> 100–350 მმ &nbsp;|&nbsp; <strong>მასალები:</strong> BOPP, PET, PVC, CPP, PE, OPP, ნეილონი</div><p>თითოეულ ფერის სადგურს აქვს საკუთარი მელნის ღარი, დოქტორის პირი (ახეხს ჭარბ მელანს ცილინდრიდან), გამშრობი გვირაბი და რეგისტრაციის სისტემა. ფილმი გადის ყველა სადგურს ერთ უწყვეტ გასასვლელში.</p><p>მანქანა იყენებს <strong>ავტომატური რეგისტრის კონტროლის სისტემას</strong> — კამერები მუდმივად აკვირდებიან სარეგისტრაციო ნიშნებს და რეალურ დროში მიკრო-ასწორებენ თითოეული ცილინდრის პოზიციას, ინარჩუნებენ ყველა 8 ფერს სრულყოფილ რეგისტრაციაში სიჩქარეზე ფილმის გაჭიმვის მიუხედავად.</p><div class=\"rm-conclusion\">ეს ერთი მანქანა განსაზღვრავს ქარხნის სიმძლავრის ზღვარს. მისი სამუშაო დრო, კონფიგურაციის დრო და ცილინდრის შეცვლის დრო არის ძირითადი წარმოების განრიგის ცვლადები.</div>"
      },
      ya800: {
        title: "WITY Machinery — YA800 გრავიურული საბეჭდი მანქანა",
        html: "<p>YA800 არის <strong>სარეზერვო გრავიურული პრესი</strong>. ასრულებს იგივე როტოგრავიურულ ბეჭდვის პროცესს, რაც YAD-K8800-ს, მაგრამ დაბალი სიჩქარით და ნაკლები ავტომატიზაციით.</p><div class=\"rm-highlight\"><strong>ბეჭდვის სიგანე:</strong> 800 მმ-მდე &nbsp;|&nbsp; <strong>სიჩქარე:</strong> 100 მ/წთ-მდე &nbsp;|&nbsp; <strong>ფერები:</strong> 8-მდე &nbsp;|&nbsp; <strong>ბეჭდვის სიზუსტე:</strong> ±0.2 მმ &nbsp;|&nbsp; <strong>მასალები:</strong> BOPP, PET, PVC, PE, OPP</div><p>YA800 იყენებს <strong>ხელით რეგისტრის რეგულირებას</strong> YAD-ის ავტომატური კამერის სისტემის ნაცვლად — ოპერატორი ხელით უნდა დაარეგულიროს ფერების გასწორება კონფიგურაციისას და პერიოდულად სამუშაოს მიმდინარეობისას. ეს ხდის მის კონფიგურაციას უფრო ნელ და ოპერატორის უნარებზე უფრო დამოკიდებულს.</p><p>მისი როლი წარმოებაში: ამუშავებს მოკლე ტირაჟებს, რომლებიც YAD-ის კონფიგურაციას არ ამართლებს, უმუშავებს მარტივ დიზაინებს (ნაკლები ფერი, ნაკლები სიზუსტეა საჭირო), ან უზრუნველყოფს გადამეტებულ სიმძლავრეს, როდესაც YAD გრძელ სამუშაოზეა დაკავებული.</p><div class=\"rm-conclusion\">YAD-სა და YA800-ს შორის არჩევანი დამოკიდებულია ტირაჟის სიგრძეზე და სირთულეზე. მოკლე ან მარტივი სამუშაოები YA800-ზე მიდის; მაღალი მოცულობის ან მჭიდრო რეგისტრის სამუშაოები YAD-ზე.</div>"
      },
      qd300: {
        title: "WITY Machinery — QD-300 მიკროკომპიუტერული ავტომატური საჭრელი",
        html: "<p>QD-300 არის <strong>განივი საჭრელი მანქანა</strong> — იღებს უწყვეტ დაბეჭდილ რულონს და ჭრის მას ფილმის მიმართულებაზე პერპენდიკულარულად ინდივიდუალურ ბრტყელ ნაჭრებად დადგენილი სიგრძის.</p><div class=\"rm-highlight\"><strong>ჭრის სიგრძე:</strong> 50–500 მმ (რეგულირებადი) &nbsp;|&nbsp; <strong>მაქს. სიჩქარე:</strong> 150 ჭრა/წთ &nbsp;|&nbsp; <strong>მაქს. ფილმის სიგანე:</strong> 300 მმ &nbsp;|&nbsp; <strong>რეგისტრაცია:</strong> ოპტიკური ნიშნის თვალთვალი &nbsp;|&nbsp; <strong>ვარიანტები:</strong> პერფორაციის პირი, თბური ლუქის ზოლი</div><p>მანქანა კითხულობს <strong>დაბეჭდილ სარეგისტრაციო ნიშნებს</strong> (ბეჭდვისას დამატებული მცირე ნიშნები), რათა უზრუნველყოს თითოეული ჭრა ზუსტად სწორ პოზიციაზე მოხვდეს დიზაინთან შედარებით — არა მხოლოდ ფიქსირებულ ინტერვალზე. ეს კრიტიკულია, როდესაც დიზაინებს აქვთ ცვლადი ნათეძარი ან სადაც ჭრა კონკრეტულ დაბეჭდილ ხაზზე უნდა მოხვდეს.</p><p>ამჟამად უმოქმედოა, რადგან ქარხნის ორივე პროდუქტი (შეკუმშვადი სლივები და BOPP გახვევის ეტიკეტები) ორივე რულონებად იგზავნება, არა ინდივიდუალური დაჭრილი ნაჭრებად. ეს მანქანა გააქტიურდება, თუ ქარხანა მიიღებს დაჭრილი ფურცლის ეტიკეტების შეკვეთებს, ნიმუშების წიგნაკებს ან დამცავი ზოლების წარმოებას.</p><div class=\"rm-conclusion\">მზადაა განბლოკოს დაჭრილი ფურცლის ან ინდივიდუალური ეტიკეტის ფორმატები ახალი ინვესტიციის გარეშე.</div>"
      },
      ozm: {
        title: "OZM-55 LS — დეტალური ანალიზი",
        html: "<p>OZM-55 LS არის <strong>პლასტიკური პაკეტების დამამზადებელი მანქანა</strong> — სრულიად ცალკე პროდუქციის კატეგორია ეტიკეტებისგან. იღებს ბრტყელი პლასტიკური ფილმის რულონს და გარდაქმნის მზად, დალუქულ პაკეტებად საცალო ან სამრეწველო გამოყენებისთვის.</p><div class=\"rm-highlight\"><strong>გამომავალი:</strong> 300 პაკეტი/წთ-მდე &nbsp;|&nbsp; <strong>პაკეტის ტიპები:</strong> ქვედა ლუქი, გვერდითი ლუქი &nbsp;|&nbsp; <strong>ფილმის ტიპები:</strong> LDPE, HDPE, CPP, OPP &nbsp;|&nbsp; <strong>მაქს. ფილმის სიგანე:</strong> 550 მმ &nbsp;|&nbsp; <strong>ლუქის მეთოდი:</strong> თბური ლუქი</div><p>მანქანა ასრულებს სამ ოპერაციას ერთ გასასვლელში: კეცავს ან ამილებს ბრტყელ ფილმს, თბურად ლუქავს ქვედა კიდეს პაკეტის ჯიბის შესაქმნელად, შემდეგ ჭრის პაკეტს სიგრძეზე. მზა პაკეტები ავტომატურად იწყობება გამომავალი ტრანსპორტიორით.</p><p>ეს მანქანა ამჟამად უმოქმედოა, რადგან ქარხანა მთლიანად ფოკუსირებულია დაბეჭდილი ეტიკეტის რულონებზე. მისი გააქტიურება მოითხოვს შესაბამისი სიგანის გლუვი ან დაბეჭდილი ფილმის მოძიებას და პაკეტების მყიდველი მომხმარებლების პოვნას — ეტიკეტების მყიდველებისგან განსხვავებული გაყიდვების არხი.</p><div class=\"rm-conclusion\">წარმოადგენს მოქნილ შეფუთვაში დივერსიფიკაციის მზა გზას კაპიტალური ინვესტიციის გარეშე. შეზღუდვა კომერციულია (პაკეტების მომხმარებლების პოვნა), არა ტექნიკური.</div>"
      },
      polar: {
        title: "Polar Mohr 76 — გილიოტინური საჭრელი",
        html: "<p>Polar Mohr 76 არის გერმანიაში დამზადებული <strong>ზუსტი პროგრამირებადი გილიოტინური საჭრელი</strong>. ჭრის ბრტყელი ფურცლოვანი მასალის — ქაღალდის, ფილმის, მუყაოს — წყობებს ზუსტ განზომილებებზე ერთი ქვევით პირის დარტყმით.</p><div class=\"rm-highlight\"><strong>ჭრის სიგანე:</strong> 760 მმ &nbsp;|&nbsp; <strong>ჭრის სიმაღლე:</strong> 80 მმ წყობამდე &nbsp;|&nbsp; <strong>პოზიციონირების სიზუსტე:</strong> ±0.1 მმ &nbsp;|&nbsp; <strong>კონტროლი:</strong> პროგრამირებადი უკანა სამჭიდი სამუშაოს მეხსიერებით &nbsp;|&nbsp; <strong>წარმოშობა:</strong> გერმანია (Polar Mohr)</div><p>პროგრამირებადი უკანა სამჭიდი ოპერატორებს საშუალებას აძლევს წინასწარ შეიტანონ ჭრის პოზიციების თანმიმდევრობა — მანქანა ავტომატურად ასწრაფებს მასალას თითოეულ პოზიციაზე. ეს საშუალებას იძლევა რთული მრავალ-ჭრის სამუშაოები (მაგ., ფურცლის 6 სხვადასხვა ზომად დაჭრა) ჭრებს შორის ხელით გაზომვის გარეშე.</p><p>ამჟამად უმოქმედოა, რადგან ორივე პროდუქტი რულონებად იგზავნება. ეს მანქანა საჭირო გახდება, თუ ქარხანა აწარმოებს <strong>ბრტყელი ფურცლის ეტიკეტებს, წიგნაკებს, დასაკეცი კარტონის შეფუთვებს ან წინასწარ დაჭრილი სტიკერების ფურცლებს</strong>. ასევე შეიძლება გამოყენებულ იქნეს ნიმუშების წიგნების წარმოებისთვის ან რულონის ბოლო ნარჩენების გამოსადეგ ბრტყელ მარაგად დასაჭრელად.</p><div class=\"rm-conclusion\">მაღალი ღირებულების გერმანული აღჭურვილობა, რომელიც ამჟამად ნულოვან შემოსავალს გამოიმუშავებს. ყველაზე ნათელი გააქტიურების გზა არის დაჭრილ ზომებზე ბრტყელი ეტიკეტის ფურცლების დამატებით პროდუქტად შეთავაზება.</div>"
      },
      lam: {
        title: "ლამინატორი — ფილმის შემაერთებელი",
        html: "<p>ლამინირების მანქანა <strong>აერთებს ორ ან მეტ ფილმის ფენას ერთ კომპოზიტურ სტრუქტურაში</strong>. ეტიკეტებისა და მოქნილი შეფუთვის წარმოებაში ლამინირება გამოიყენება დაბეჭდილი გარე ფენის ფუნქციურ შიდა ფენასთან — მაგალითად ბარიერული ფილმი, მეტალური ფოლგა ან თბური ლუქის ფენა — შესაერთებლად.</p><div class=\"rm-highlight\">მფლობელმა დაადასტურა, რომ მანქანა ადგილზეა. <strong>სახელმძღვანელო ან სპეციფიკაციის ფურცელი ვერ მოიძებნა</strong> დოკუმენტების კოლექციაში. ტექნიკური დეტალები (სიჩქარე, სიგანე, ლამინირების მეთოდი) დაუდასტურებელია და ფიზიკური გადამოწმება სჭირდება.</div><p>შესაძლო ლამინირების მეთოდები, რომლებიც ამ ტიპის მანქანამ შეიძლება გამოიყენოს: <strong>მშრალი ლამინირება</strong> (წებო წაისმება, შრება, შემდეგ სითბო/წნევით ერთდება), <strong>სველი ლამინირება</strong> (წყალზე დაფუძნებული წებო), ან <strong>ექსტრუზიული ლამინირება</strong> (გამდნარი პლასტიკის ფენა ფილმებს შორის ერთდება).</p><p>სამუშაო მდგომარეობაში ეს მანქანა საშუალებას მისცემს ქარხანას აწარმოოს <strong>მრავალფენიანი მოქნილი შეფუთვა</strong> — ჩიფსის პაკეტები, ყავის პარკები, რეტორტული პარკები ან ლამინირებული ეტიკეტის მარაგი. ეს პროდუქტები მნიშვნელოვნად მაღალ მარჟებს მოაქვს, ვიდრე გლუვი დაბეჭდილი ფილმი.</p><div class=\"rm-conclusion\">პოტენციურად ყველაზე სტრატეგიულად მნიშვნელოვანი უმოქმედო აქტივი. სჭირდება სახელმძღვანელოს/სპეციფიკაციის გადამოწმება ნებისმიერი წარმოების დაგეგმვამდე. დადასტურებული სამუშაო მდგომარეობის შემთხვევაში, ხსნის არსებული აღჭურვილობით ხელმისაწვდომ ყველაზე მაღალი მარჟის პროდუქციის კატეგორიას.</div>"
      }
    }
  }
};

export function getLang() { return localStorage.getItem('lang') || 'en'; }
export function setLang(l) { localStorage.setItem('lang', l); }
