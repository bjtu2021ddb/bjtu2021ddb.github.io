import { Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { columns, queryPOIs } from "../../model/poi_data";
import "./index.css";
import { useHistory } from "react-router";

function POIList() {
  const [pois, setPOIs] = useState([]);
  const history = useHistory();

  const onPOIClick = useCallback((poi, index) => {
    history.push(`/poi/edit/${poi.objectId}`);
  }, []);

  useEffect(() => {
    queryPOIs().then((pois) => setPOIs(pois));
  }, []);

  return (
    <div className="POIList">
      <Table
        dataSource={pois}
        columns={columns}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              onPOIClick(record, index);
            }, // 点击行
          };
        }}
      />
    </div>
  );
}

export default POIList;
