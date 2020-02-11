import { Data, Override } from "framer"

const data = Data({
    rotate: 0,
    rotateY: 0,
    toggle: true,
})

export function Hover(cards): Override {
    return {
        transition: { duration: 0.5 },
        boxShadow: "0px 0px 0px 0px #ffffff",
        border: "1px solid #ffffff",
        whileHover: {
            transition: { duration: 1 },
            boxShadow: "0px 30px 54px 20px rgba(85, 98, 159, 0.31)",
        },
    }
}

export function Draggable(): Override {
    return {
        drag: true,
    }
}

export function Rotate(): Override {
    return {
        animate: { rotate: data.rotate },
        onTap() {
            data.rotate = data.rotate + 90
        },
    }
}

export function FlipInput(): Override {
    return {
        onTap() {
            const toggle = data.toggle
            data.rotateY = toggle ? 180 : 0
            data.toggle = !toggle
        },
    }
}

export function FlipOutput(): Override {
    return {
        animate: { rotateY: data.rotateY },
    }
}
