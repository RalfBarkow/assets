import { render } from "https://cdn.skypack.dev/solid-js";
import krestianstvo from 'https://cdn.jsdelivr.net/npm/krestianstvo@0.2.1/+esm';
import { Selo, createLocalStore } from "https://cdn.jsdelivr.net/npm/krestianstvo@0.2.1/dist/krestianstvo.umd.min.js";

const Counter = (props) => {
  const [local, setLocal] = createLocalStore(
    {
      data: {
        type: "Node",
        nodeID: props.nodeID,
        properties: {
          name: props.nodeID,
          count: 0,
          ticking: false,
          initialized: false
        }
      }
    },
    props
  );

  const inc = () => {
    setLocal("data", "properties", "count", (c) => c + 1);
    props.selo.future(props.nodeID, "inc", 0.2);
  };

  const initialize = () => {
    inc();
  };

  props.selo.createAction(props.nodeID, "inc", inc);
  props.selo.createAction(props.nodeID, "initialize", initialize);

  return (
    <>
      <h1>{local.data.properties.count}</h1>
    </>
  );
};

render(
  () => (
    <Selo
      nodeID={"counter"}
      seloID={"sandbox_counter"}
      component={Counter}
      reflectorHost={"https://time.krestianstvo.org"}
    />
  ),
  document.getElementById("root")
);
