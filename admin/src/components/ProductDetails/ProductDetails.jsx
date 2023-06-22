import { DeleteOutlined, InboxOutlined, UploadOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Row,
  Select,
  Space,
  Switch,
  Upload,
  Input,
} from 'antd';
import { useParams } from 'react-router-dom';
const { Option } = Select;
const formItemLayout = {
  // labelCol: {
  //   span: 6,
  // },
  // wrapperCol: {
  //   span: 14,
  // },
};
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const ProductDetails = () => {
  const { TextArea } = Input;
  const { id } = useParams();
  console.log(id);
  const selectAfter = (
    <Select defaultValue="g">
      <Option value="g">g</Option>
      <Option value="ml">ml</Option>
      <Option value="kg">kg</Option>
      <Option value="l">l</Option>
    </Select>
  );
  return (
    <>
      <div className="header">
        <div className="heading">
          {(id==="add")? "Add": "Edit"} Product
        </div>
        <div className="header__button">
          <button onClick={() => window.location.href = '/products'}>
            Back
          </button>
        </div>
      </div>
      <div className="product-details__form">
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            'title': '',
            'category': 'Dairy',
            'brand_name': '',
            'size': '',
            'price': 0,
            'inStock': true,
            'orderTypes': [],
            'description': '',
            'images': [],
            'benefits': [],
          }}
        >

          <div className="product-details__form--info">
            <Form.Item name="title" label="Title" wrapperCol={{ span: 8 }}>
              <Input placeholder="Product Title" />
            </Form.Item>
            <Form.Item name="category" label="Category" wrapperCol={{ span: 8 }}>
              <Select placeholder="Select Category">
                <Option value="Dairy">Dairy</Option>
              </Select>
            </Form.Item>
            <Form.Item name="brand_name" label="Brand Name" wrapperCol={{ span: 8 }}>
              <Input placeholder="Product Brand" />
            </Form.Item>
          </div>
          <Form.Item name="size" label="Size" wrapperCol={{ span: 8 }}>
            <Input placeholder="Product Size" addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item name="price" label="Price" wrapperCol={{ span: 8 }}>
            <InputNumber
              defaultValue={1000}
              formatter={(value) => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>

          <Form.Item name="inStock" label="Stock" valuePropName="checked" initialValue>
            <Switch />
          </Form.Item>

          <Form.Item name="orderTypes" label="Order Type">
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox
                    value="trail"
                  >
                    Trail
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="buy"
                  >
                    Buy
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="subscribe"
                  >
                    Subscribe
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            wrapperCol={{ span: 8 }}
          >
            <TextArea
              showCount
              maxLength={400}
              style={{ height: 120, resize: 'none' }}
              placeholder="Product Description"
            />
          </Form.Item>
          <Form.Item label="Upload Images">
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>


          {/* Form List with Array Items with a button to add more inputs*/}
          <Form.List name="benefits">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <>
                    <Form.Item
                      {...field}
                      fieldKey={[field.fieldKey, index]}
                    >
                      <Input placeholder="Enter the Benifit Here" />
                    </Form.Item>
                    <Form.Item>
                      <Button type="dashed" onClick={() => remove(index)} block icon={<DeleteOutlined />}>
                        Remove field
                      </Button>
                    </Form.Item>
                  </>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<UserAddOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            wrapperCol={{
              span: 12,
            }}
          >
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ProductDetails;