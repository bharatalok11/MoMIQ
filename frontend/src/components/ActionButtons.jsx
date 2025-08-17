const ActionButtons = ({ onClearAll }) => {
  return (
    <section className="py-4">
      <div className="bodyAlign">
        <div className="alignCenter">
          <button 
            onClick={onClearAll} 
            className="btnDanger"
          >
            <span>🗑️</span>
            <span>Reset</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;