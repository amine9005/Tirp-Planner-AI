import ChatBoxOrganism from "./ChatBox.organism";

const CreateNewTripOrganism = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <ChatBoxOrganism />
      </div>
      <div>Map</div>
    </div>
  );
};

export default CreateNewTripOrganism;
