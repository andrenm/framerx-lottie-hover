import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    Data,
    Override,
    RenderTarget,
} from "framer"
import Lottie from "react-lottie"
import * as new_account_light from "./new_account_light.json"
import * as new_project_light from "./new_project_light.json"
import * as new_employee_light from "./new_employee_light.json"
import * as existing_project from "./newEmployee/existing_project.json"
import * as new_project from "./newEmployee/new_project.json"
import * as without_project from "./newEmployee/without_project.json"

// Open Preview: Command + P
// Learn more: https://framer.com/api

LottieCustom.defaultProps = {}

export function LottieCustom(props) {
    var lottie: any = React.createRef()

    const [selected, setSelected] = React.useState(false)
    const [direction, setDirection] = React.useState(1)

    const value = props.value || 1
    const animationType = {
        1: new_account_light,
        2: new_project_light,
        3: new_employee_light,
        4: existing_project,
        5: new_project,
        6: without_project,
    }

    function Selected() {
        setSelected(true)
        setDirection(1)
    }

    function UnSelected() {
        setSelected(false)
        if (value === 2) {
            setDirection(0)
        }
    }

    return (
        <div onMouseEnter={Selected} onMouseLeave={UnSelected}>
            <Lottie
                ref={ref => (lottie = ref)}
                direction={direction ? 1 : -1}
                options={{
                    loop: false,
                    autoplay: selected,
                    animationData: animationType[value],
                }}
                height={"100%"}
                width={"100%"}
            />
        </div>
    )
}

addPropertyControls(LottieCustom, {
    value: {
        type: ControlType.Enum,
        defaultValue: 1,
        options: [1, 2, 3, 4, 5, 6],
        optionTitles: [
            "New account",
            "New Project",
            "New employee",
            "New employee - existing project",
            "New employee - new project",
            "New employee - without project",
        ],
    },
})
