import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, Input, Space, Upload } from "antd";
import "./index.css";
import { queryPOI } from "../../model/poi_data";
import previewImage from "../../utils/previewImage";

function POIEdit() {
  const { objectId } = useParams();
  const history = useHistory();
  const formRef = useRef();
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newList }) => {
    setFileList(newList);
  };

  const onPreview = async (file) => {
    await previewImage(file);
  };

  useEffect(() => {
    queryPOI(objectId).then((poi) => {
      formRef.current.setFieldsValue(poi);
    });
  }, []);

  const onFinish = useCallback(() => {}, []);
  const onFinishFailed = useCallback(() => {}, []);
  const onBack = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <>
      <div className="POIEdit">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          name="poiEdit"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={formRef}
        >
          <Form.Item name="station_name" label="车站名称">
            <Input />
          </Form.Item>

          <Form.Item name="key_type" label="关键点类型">
            <Input />
          </Form.Item>

          <Form.Item name="name" label="名称">
            <Input />
          </Form.Item>

          <Form.Item name="type" label="类型">
            <Input />
          </Form.Item>

          <Form.Item name="track_id" label="轨道号">
            <Input />
          </Form.Item>

          <Form.Item name="position" label="位置(厘米)">
            <Input />
          </Form.Item>

          <Form.Item name="mileage" label="里程">
            <Input />
          </Form.Item>

          <Form.Item name="remark" label="备注">
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              上传图片
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                保存
              </Button>

              <Button htmlType="button" onClick={onBack}>
                返回
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default POIEdit;
