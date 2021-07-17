import React from 'react'
import { Link } from "react-router-dom";
import '../content/style.css'
import debby from "../../media/debby.png";
import meal from "../../media/meal.jpg";
import pedro from "../../media/pedro.png";
import product from "../../media/product.jpg";





function Content() {
    return (
        <div class="page2">


            <div class="page2_sub">

                <div class="page2_sub_container">

                    <div class="box">
                        <Link to="/workout">
                            <img src={debby} />
                        </Link>
                        <span>Work-Out Plan</span>
                    </div>

                    <div class="box">
                        <img src={meal} />
                        <span>Meal-plan</span>
                    </div>
                    <div class="box">
                        <img src={product} />
                        <span>Market</span>
                    </div>
                    <div class="box">
                        <img src={pedro} />
                        <span>Join us</span>
                    </div>

                </div>

            </div>


        </div>
    )

}

export default Content
