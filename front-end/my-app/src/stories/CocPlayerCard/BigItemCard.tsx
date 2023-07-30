export const BigItemCard = (header: any, subheader: any, icon: any) => {
    return (
        <div className="grid-container" style={{width:600}}>
            <div className="item item-header">{header}</div>
            <div className="item item-subheader">{subheader}</div>
            <div className="item-image"><img src={icon} /></div>
        </div>
    )
}