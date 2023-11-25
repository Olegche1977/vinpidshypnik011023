const chains_obj= [
    {
      id: 0,
      item: 'Ланцюг привідний, ПР38.1-3000',
      itemName: 'Ланцюг привідний, ПР38.1-3000',
      foto: '/datagoods/chains.png',
      dimensions: '38.1mm'
    },
    {
      id: 1,
      item: 'Ланцюг привідний, ПР24.5-3000',
      itemName: 'Ланцюг привідний, ПР24.5-3000',
      foto: '/datagoods/chains.png',
      dimensions: '24.5mm'
    },
    {
      id: 2,
      item: 'Ланцюг привідний 60H-1 L=5.0м',
      itemName: 'Ланцюг привідний 60H-1 L=5.0м',
      foto: '/datagoods/chains.png',
      dimensions: '19.05mm'
    },
    {
      id: 3,
      item: 'Ланцюг привідний, 60H-1 L=5.0м RENOLD SD',
      itemName: 'Ланцюг привідний, 60H-1 L=5.0м RENOLD SD',
      foto: '/datagoods/chains.png',
      dimensions: '19,05mm'
    },
    {
      id: 4,
      item: 'Ланцюг привідний 80-1 L=5.0м HELVIC ',
      itemName: 'Ланцюг привідний 80-1 L=5.0м HELVIC ',
      foto: '/datagoods/chains.png',
      dimensions: '25.4mm'
    },
    {
      id: 5,
      item: 'Ланцюг привідний, 80H-1 L=5.0м RENOLD SD',
      itemName: 'Ланцюг привідний, 80H-1 L=5.0м RENOLD SD',
      foto: '/datagoods/chains.png',
      dimensions: '25,4mm'
    },
    {
      id: 6,
      item: 'Ланцюг привідний ПР 15,875 з зірочками',
      itemName: 'Ланцюг привідний ПР 15,875 з зірочками',
      foto: '/datagoods/chains.png',
      dimensions: '15,875mm'
    },
    {
      id: 7,
      item: 'Ланцюг привідний, ПР 19,05 60-1 L5,01,',
      itemName: 'Ланцюг привідний, ПР 19,05 60-1 L5,01,',
      foto: '/datagoods/chains.png',
      dimensions: '19,05mm'
    },
    {
      id: 8,
      item: 'Ланцюг привідний ПР 25,4-6000 L=1.75м(69L)(16A-1) CT chain',
      itemName: 'Ланцюг привідний ПР 25,4-6000 L=1.75м(69L)(16A-1) CT chain',
      foto: '/datagoods/chains.png',
      dimensions: '25,4mm'
    },
    {
      id: 9,
      item: 'Ланцюг привідний, ПР 38,1-12700',
      itemName: 'Ланцюг привідний, ПР 38,1-12700',
      foto: '/datagoods/chains.png',
      dimensions: '38,1mm'
    },
    {
      id: 10,
      item: 'Ланцюг привідний 06 В-1 L=5м RENOLD SD',
      itemName: 'Ланцюг привідний 06 В-1 L=5м RENOLD SD',
      foto: '/datagoods/chains.png',
      dimensions: '9,525mm'
    },
    {
      id: 11,
      item: 'Ланцюг привідний,  08 В-1 L=5м HELVIC',
      itemName: 'Ланцюг привідний,  08 В-1 L=5м HELVIC',
      foto: '/datagoods/chains.png',
      dimensions: '12,7mm'
    },
    {
      id: 12,
      item: 'Ланцюг привідний 12 В-1 L=5м RENOLD SD',
      itemName: 'Ланцюг привідний 12 В-1 L=5м RENOLD SD',
      foto: '/datagoods/chains.png',
      dimensions: '19,05mm'
    },
    {
      id: 13,
      item: 'Ланцюг привідний,  15,585-2300-2',
      itemName: 'Ланцюг привідний,  15,585-2300-2',
      foto: '/datagoods/chains.png',
      dimensions: '15,585mm'
    },
    {
      id: 14,
      item: 'Ланцюг привідний 2 ПР 12,7-3200',
      itemName: 'Ланцюг привідний 2 ПР 12,7-3200',
      foto: '/datagoods/double_chains.png',
      dimensions: '12,7mm'
    },
    {
      id: 15,
      item: 'Ланцюг привідний,  2 ПР 19,05',
      itemName: 'Ланцюг привідний,  2 ПР 19,05',
      foto: '/datagoods/double_chains.png',
      dimensions: '19,05mm'
    },
    {
      id: 16,
      item: 'Ланцюг привідний 2 ПР 25,4-11400',
      itemName: 'Ланцюг привідний 2 ПР 25,4-11400',
      foto: '/datagoods/double_chains.png',
      dimensions: '25,4mm'
    },
    {
      id: 17,
      item: 'Ланцюг привідний,  2 ПР 25,4/16 В-2L=2.5м',
      itemName: 'Ланцюг привідний,  2 ПР 25,4/16 В-2L=2.5м',
      foto: '/datagoods/double_chains.png',
      dimensions: '25,4mm'
    },
    {
      id: 18,
      item: 'Ланцюг привідний 2 ПР 9,525-1100',
      itemName: 'Ланцюг привідний 2 ПР 9,525-1100',
      foto: '/datagoods/double_chains.png',
      dimensions: '9,525mm'
    },
    {
      id: 19,
      item: 'Ланцюг елеватора КШП (в зборі)',
      itemName: 'Ланцюг елеватора КШП (в зборі)',
      foto: '/datagoods/chains.png',
      dimensions: '38,1mm'
    },
    {
      id: 20,
      item: 'Ланцюг привідний ПР 12,7-1820-1',
      itemName: 'Ланцюг привідний ПР 12,7-1820-1',
      foto: '/datagoods/chains.png',
      dimensions: '12,7mm'
    },
    {
      id: 21,
      item: 'Ланцюг  ПРЛ 38-400',
      itemName: 'Ланцюг  ПРЛ 38-400',
      foto: '/datagoods/chains.png',
      dimensions: '15,875mm'
    },
    {
      id: 22,
      item: 'Ланцюг привідний ПР 19,05 (60H-1 L=5.0м) HELVIS',
      itemName: 'Ланцюг привідний ПР 19,05 (60H-1 L=5.0м) HELVIS',
      foto: '/datagoods/chains.png',
      dimensions: '19,05mm'
    },
    {
      id: 23,
      item: 'Ланцюг  ПРЛ 38-400',
      itemName: 'Ланцюг  ПРЛ 38-400',
      foto: '/datagoods/chains.png',
      dimensions: '38,5mm'
    },

]

export default chains_obj;