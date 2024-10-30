function Preferences() {
  function handleToggleView() {
  }

  function handleToggleUnits() {
  }

  return (
    <div>
      <button onClick={handleToggleView}>
        Switch to {view === "list" ? "Grid" : "List"} View
      </button>

      <button onClick={handleToggleUnits}>
        Switch to {units === "metric" ? "Imperial" : "Metric"} Units
      </button>
    </div>
  );
}

export default Preferences;
