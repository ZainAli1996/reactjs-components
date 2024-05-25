function NewButton(props:any) {
    console.log(props);
    const {className, BtnName, ClickMe} = props;
    return(
      <button onClick={ClickMe} className={className}>{BtnName}</button>
    );
}

export default NewButton;