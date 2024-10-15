import './HeaderPanel.css';

const HeaderPanel = ({switchTheme}) => {
    return (
        <div className={'headerPanel'}>
            <h1>Todo</h1>
            <button onClick={switchTheme}></button>
        </div>
    )
}

export default HeaderPanel;