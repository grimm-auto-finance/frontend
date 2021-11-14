function statBox(props: { name: string; value: string }) {
  return (
    <div className="shadow-xl">
      <div>{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
}

export default statBox;
