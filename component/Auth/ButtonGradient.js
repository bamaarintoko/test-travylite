import styles from "../../styles/Wrapper.module.css"
export default function ({ title = "title", onClick }) {
    return (
        <div onClick={onClick} className={styles.button}>
            <span style={{ fontSize: 14, fontFamily: 'Roboto', color: "#FEFEFE" }}>{title}</span>
        </div>
    )
}