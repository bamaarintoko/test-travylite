import styles from "../../styles/Wrapper.module.css"
export default function ButtonLoginGoogle ({ title = "title", onClick }) {
    return (
        <div onClick={onClick} style={{ height: 40, borderWidth: 1, borderStyle: "solid", borderRadius: 16, borderColor: "rgba(0, 0, 0, 0.3)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, fontFamily: 'Roboto', color: "rgba(0, 0, 0, 0.5)" }}>{title}</span>
        </div>
    )
}