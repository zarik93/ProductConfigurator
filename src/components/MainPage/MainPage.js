import React, { useEffect, useState } from 'react'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Select,
  Switch,
} from 'antd'
import Header from './Header'

import './MainPage.css'
import { useSelector } from 'react-redux'

const MainPage = () => {
  //const [priceCar, setPrice] = useState(0)
  const [priceCar, setNumber] = useState(0)
  const [imagePath, setImagePath] = useState(
    'https://di-uploads-pod4.dealerinspire.com/rallyebmw/uploads/2019/06/2019-BMW-X5.png'
  )

  const actionValue = useSelector((state) => state.auctionPrice)
  const actionValueDefault = 100

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const changeImage = (newImagePath) => {
    setImagePath(newImagePath)
  }

  return (
    <div className="main-page">
      <Header />
      <div className="container">
        <div className="form-container">
          <Form
            className="form-style"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 13,
            }}
            layout="horizontal"
            // initialValues={{
            //   size: componentSize,
            // }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              name="radio-button"
              label="Engine"
              rules={[{ required: true, message: 'Please pick an item!' }]}
            >
              <Radio.Group>
                <Radio.Button
                  onClick={() =>
                    changeImage(
                      'https://www.dodge.com/mediaserver/iris?client=FCAUS&market=U&brand=D&vehicle=2022_LD&paint=PCD&fabric=&sa=LDDT48,2DZ,27Z,APA&pov=fronthero&width=300&height=200&bkgnd=transparent&resp=png&x=&y=&w=&h=&width=300&width=300'
                    )
                  }
                  value="a"
                >
                  benzine
                </Radio.Button>
                <Radio.Button
                  onClick={() =>
                    changeImage(
                      'https://di-uploads-pod4.dealerinspire.com/rallyebmw/uploads/2019/06/2019-BMW-X5.png'
                    )
                  }
                  value="b"
                >
                  diesel
                </Radio.Button>
                <Radio.Button value="c">hybrid</Radio.Button>
                <Radio.Button value="c">electric</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="radio-group" label="Auction">
              <div>
                <Radio.Group onChange={handleChange}>
                  <Radio value={actionValue ? actionValue : actionValueDefault}>
                    Copart
                  </Radio>
                  <Radio value={200}>IAAI</Radio>
                  <Radio value={300}>PLC</Radio>
                </Radio.Group>
              </div>
            </Form.Item>
            <Form.Item label="Price">
              <InputNumber
                // autocomplete="on"
                //value={priceCar}
                // onChange={priceCarHandler}
                // formatter={formatPrice}
                min={0}
              />
            </Form.Item>
            <Form.Item label="State">
              <Select>
                <Select.Option value="California">California</Select.Option>
                <Select.Option value="Florida">Florida</Select.Option>
                <Select.Option value="New York">New York</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Car body">
              <Cascader
                options={[
                  {
                    value: 'style1',
                    label: 'style 1',
                    children: [
                      {
                        value: 'sedan ',
                        label: 'Sedan ',
                      },
                      {
                        value: 'hatchback ',
                        label: 'Hatchback ',
                      },
                      {
                        value: 'wagon ',
                        label: 'Station wagon ',
                      },
                    ],
                  },
                  {
                    value: 'style2',
                    label: 'style 2',
                    children: [
                      {
                        value: 'suv',
                        label: 'SUV',
                      },
                    ],
                  },
                  {
                    value: 'style3',
                    label: 'style 3',
                    children: [
                      {
                        value: 'minivan',
                        label: 'Minivan',
                      },
                      {
                        value: 'pickup',
                        label: 'Pickup truck',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item name="year-picker" label="Year">
              <DatePicker picker="year" />
            </Form.Item>
            <Form.Item label="Engine cc">
              <InputNumber min={0} max={9999} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>

          <div className="image-car">
            <img class="fit-picture" src={imagePath} alt="car"></img>
          </div>
        </div>
        <div className="Price">
          <span>${priceCar}</span>
        </div>
      </div>
    </div>
  )
}

export default MainPage
