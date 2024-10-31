// style
import './styles.css'
// eslint-disable-next-line react/prop-types
const ToolbarButton = ({ icon, onClick = () => { }, is_active = false }) => {
    return (
        <button onClick={onClick} className={`toolbar_button ${is_active ? "is_active":""}`}>
            {icon}
        </button>
    )
}

export default ToolbarButton