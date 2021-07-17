import React, { useState } from 'react'
import "../workout/style.css"
import Header from "../../component/Header/index"




function Workout() {
    const [btnClass, setBtnClass] = useState(false);
    const [btnColor, setBtnColor] = useState("red");

    return (
        <div>
            <Header/>
            <div class="container">

                <button
                    onClick={() => {
                        btnClass ? setBtnClass(false) : setBtnClass(true);
                    }}
                    className={btnClass ? "btnClass clicked" : "btnClass"}
                >
                    BARBELL
                </button>
               
                <button
                    onClick={() => {
                        btnColor === "red" ? setBtnColor("green") : setBtnColor("red");
                    }}
                    style={{ backgroundColor: btnColor }}
                >
                    DUMBELLS
                </button>
                
                


            </div>
            <div id="malefigures">
                         <div id="mobile-muscle-map">
                             <img id="mobilebg" src="/Crops/mobilebg.png"/>
                              <img id="traps-a" src="/Crops/08.-TrapsLeft.png"/>
                              <img id="traps-b" src="/Crops/08.-TrapsRight.png"/>
                              <img id="shoulders-a" src="/Crops/07.A-Deltoids.png"/>
                              <img id="shoulders-b" src="/Crops/07.B-Deltoids.png"/>
                              <img id="pecs" src="/Crops/06.-Pecs.png"/>
                              <img id="biceps-a" src="/Crops/05.A-Biceps.png"/>
                              <img id="biceps-b" src="/Crops/05.B-Biceps.png"/>
                              <img id="forearm-a" src="/Crops/14.A-Forearms.png"/>
                              <img id="forearm-b" src="/Crops/14.B-Forearms.png"/>
                              <img id="obliques" src="/Crops/04.-Obliques.png"/>
                              <img id="quads-a" src="/Crops/01.A-Quads.png"/>
                              <img id="quads-b" src="/Crops/01.B-Quads.png"/>
                              <img id="calves-a" src="/Crops/13.A-Calves.png"/>
                              <img id="calves-b" src="/Crops/13.B-Calves.png"/>
                              <img id="back-traps-a" src="/Crops/08.B-Traps.png"/>
                              <img id="back-traps-b" src="/Crops/08.C-Traps.png"/>
                              <img id="back-shoulders-a" src="/Crops/07.C-Deltoids.png"/>
                              <img id="back-shoulders-b" src="/Crops/07.D-Deltoids.png"/>
                              <img id="triceps-a" src="/Crops/09.A-Triceps.png"/>
                              <img id="triceps-b" src="/Crops/09.B-Triceps.png"/>
                              <img id="back-lats-a" src="/Crops/10.A-Lats.png"/>
                              <img id="back-lats-b" src="/Crops/10.B-Lats.png"/>
                              <img id="back-lower" src="/Crops/15.-Lower-Back.png"/>
                              <img id="back-forearms-a" src="/Crops/14.C-Forearms.png"/>
                              <img id="back-forearms-b" src="/Crops/14.D-Forearms.png"/>
                              <img id="back-glutes" src="/Crops/11.-Glutes.png"/>
                              <img id="back-hamstrings-a" src="/Crops/12.A-Hamstrings.png"/>
                              <img id="back-hamstrings-b" src="/Crops/12.B-Hamstrings.png"/>
                              <img id="back-calves-a" src="/Crops/13.C-Calves.png"/>
                              <img id="back-calves-b" src="/Crops/13.D-Calves.png"/>
                         </div>
                         <div id="muscle-map">
                             <img id="background" src="/Crops/00.-Blank-Figures.png"/>
                              <img id="traps-a" src="/Crops/08.-TrapsLeft.png"/>
                              <img id="traps-b" src="/Crops/08.-TrapsRight.png"/>
                              <img id="shoulders-a" src="/Crops/07.A-Deltoids.png"/>
                              <img id="shoulders-b" src="/Crops/07.B-Deltoids.png"/>
                              <img id="pecs" src="/Crops/06.-Pecs.png"/>
                              <img id="biceps-a" src="/Crops/05.A-Biceps.png"/>
                              <img id="biceps-b" src="/Crops/05.B-Biceps.png"/>
                              <img id="forearm-a" src="/Crops/14.A-Forearms.png"/>
                              <img id="forearm-b" src="/Crops/14.B-Forearms.png"/>
                              <img id="obliques" src="/Crops/04.-Obliques.png"/>
                              <img id="quads-a" src="/Crops/01.A-Quads.png"/>
                              <img id="quads-b" src="/Crops/01.B-Quads.png"/>
                              <img id="calves-a" src="/Crops/13.A-Calves.png"/>
                              <img id="calves-b" src="/Crops/13.B-Calves.png"/>
                              <img id="back-traps-a" src="/Crops/08.B-Traps.png"/>
                              <img id="back-traps-b" src="/Crops/08.C-Traps.png"/>
                              <img id="back-shoulders-a" src="/Crops/07.C-Deltoids.png"/>
                              <img id="back-shoulders-b" src="/Crops/07.D-Deltoids.png"/>
                              <img id="triceps-a" src="/Crops/09.A-Triceps.png"/>
                              <img id="triceps-b" src="/Crops/09.B-Triceps.png"/>
                              <img id="back-lats-a" src="/Crops/10.A-Lats.png"/>
                              <img id="back-lats-b" src="/Crops/10.B-Lats.png"/>
                              <img id="back-lower" src="/Crops/15.-Lower-Back.png"/>
                              <img id="back-forearms-a" src="/Crops/14.C-Forearms.png"/>
                              <img id="back-forearms-b" src="/Crops/14.D-Forearms.png"/>
                              <img id="back-glutes" src="/Crops/11.-Glutes.png"/>
                              <img id="back-hamstrings-a" src="/Crops/12.A-Hamstrings.png"/>
                              <img id="back-hamstrings-b" src="/Crops/12.B-Hamstrings.png"/>
                              <img id="back-calves-a" src="/Crops/13.C-Calves.png"/>
                              <img id="back-calves-b" src="/Crops/13.D-Calves.png"/>
                         </div>
                    </div>
                    <div id="femalefigures">
                         <div id="mobile-muscle-map-female">
                              <img id="mobilebg-female" src="/Crops/female/female-mobilebg.png"/>
                              <img id="female-traps-a" src="/Crops/female/female-traps-A.png"/>
                              <img id="female-traps-b" src="/Crops/female/female-traps-B.png"/>
                              <img id="female-shoulders-a" src="/Crops/female/female-deltoids-A.png"/>
                              <img id="female-shoulders-b" src="/Crops/female/female-deltoids-B.png"/>
                              <img id="female-pecs" src="/Crops/female/female-pecs.png"/>
                              <img id="female-biceps-a" src="/Crops/female/female-biceps-A.png"/>
                              <img id="female-biceps-b" src="/Crops/female/female-biceps-B.png"/>
                              <img id="female-forearm-a" src="/Crops/female/female-forearms-A.png"/>
                              <img id="female-forearm-b" src="/Crops/female/female-forearms-B.png"/>
                              <img id="female-abdominals" src="/Crops/female/female-abdominals.png"/>
                              <img id="female-quads-a" src="/Crops/female/female-quads-A.png"/>
                              <img id="female-quads-b" src="/Crops/female/female-quads-B.png"/>
                              <img id="female-calves-a" src="/Crops/female/female-calves-A.png"/>
                              <img id="female-calves-b" src="/Crops/female/female-calves-B.png"/>
                              <img id="female-back-traps-a" src="/Crops/female/female-traps-C.png"/>
                              <img id="female-back-traps-b" src="/Crops/female/female-traps-D.png"/>
                              <img id="female-back-shoulders-a" src="/Crops/female/female-deltoids-C.png"/>
                              <img id="female-back-shoulders-b" src="/Crops/female/female-deltoids-D.png"/>
                              <img id="female-triceps-a" src="/Crops/female/female-triceps-A.png"/>
                              <img id="female-triceps-b" src="/Crops/female/female-triceps-B.png"/>
                              <img id="female-back-lats-a" src="/Crops/female/female-lats-A.png"/>
                              <img id="female-back-lats-b" src="/Crops/female/female-lats-B.png"/>
                              <img id="female-back-lower" src="/Crops/female/female-lowerback.png"/>
                              <img id="female-back-forearms-a" src="/Crops/female/female-forearms-C.png"/>
                              <img id="female-back-forearms-b" src="/Crops/female/female-forearms-D.png"/>
                              <img id="female-back-glutes" src="/Crops/female/female-glutes.png"/>
                              <img id="female-back-hamstrings-a" src="/Crops/female/female-hamstrings-A.png"/>
                              <img id="female-back-hamstrings-b" src="/Crops/female/female-hamstrings-B.png"/>
                              <img id="female-back-calves-a" src="/Crops/female/female-calves-C.png"/>
                              <img id="female-back-calves-b" src="/Crops/female/female-calves-D.png"/>
                         </div>
                         <div id="muscle-map-female">
                              <img id="background-female" src="/Crops/female/Female-Figures.png"/>
                              <img id="female-traps-a" src="/Crops/female/female-traps-A.png"/>
                              <img id="female-traps-b" src="/Crops/female/female-traps-B.png"/>
                              <img id="female-shoulders-a" src="/Crops/female/female-deltoids-A.png"/>
                              <img id="female-shoulders-b" src="/Crops/female/female-deltoids-B.png"/>
                              <img id="female-pecs" src="/Crops/female/female-pecs.png"/>
                              <img id="female-biceps-a" src="/Crops/female/female-biceps-A.png"/>
                              <img id="female-biceps-b" src="/Crops/female/female-biceps-B.png"/>
                              <img id="female-forearm-a" src="/Crops/female/female-forearms-A.png"/>
                              <img id="female-forearm-b" src="/Crops/female/female-forearms-B.png"/>
                              <img id="female-abdominals" src="/Crops/female/female-abdominals.png"/>
                              <img id="female-quads-a" src="/Crops/female/female-quads-A.png"/>
                              <img id="female-quads-b" src="/Crops/female/female-quads-B.png"/>
                              <img id="female-calves-a" src="/Crops/female/female-calves-A.png"/>
                              <img id="female-calves-b" src="/Crops/female/female-calves-B.png"/>
                              <img id="female-back-traps-a" src="/Crops/female/female-traps-C.png"/>
                              <img id="female-back-traps-b" src="/Crops/female/female-traps-D.png"/>
                              <img id="female-back-shoulders-a" src="/Crops/female/female-deltoids-C.png"/>
                              <img id="female-back-shoulders-b" src="/Crops/female/female-deltoids-D.png"/>
                              <img id="female-triceps-a" src="/Crops/female/female-triceps-A.png"/>
                              <img id="female-triceps-b" src="/Crops/female/female-triceps-B.png"/>
                              <img id="female-back-lats-a" src="/Crops/female/female-lats-A.png"/>
                              <img id="female-back-lats-b" src="/Crops/female/female-lats-B.png"/>
                              <img id="female-back-lower" src="/Crops/female/female-lowerback.png"/>
                              <img id="female-back-forearms-a" src="/Crops/female/female-forearms-C.png"/>
                              <img id="female-back-forearms-b" src="/Crops/female/female-forearms-D.png"/>
                              <img id="female-back-glutes" src="/Crops/female/female-glutes.png"/>
                              <img id="female-back-hamstrings-a" src="/Crops/female/female-hamstrings-A.png"/>
                              <img id="female-back-hamstrings-b" src="/Crops/female/female-hamstrings-B.png"/>
                              <img id="female-back-calves-a" src="/Crops/female/female-calves-C.png"/>
                              <img id="female-back-calves-b" src="/Crops/female/female-calves-D.png"/>
                         </div>
                    </div>
            
        </div>
    )
}

export default Workout


