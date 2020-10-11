function generateBullshit(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: [
      '週末加班',
      '要能賺錢',
      '想個 business model ',
      '找 VC 募錢',
    ],
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  //define dummy data
  // const options = {
  //   exampleRadios: 'option3',
  // }

  // create a collection to store things user picked up
  let collection = ''
  let random = Math.floor(Math.random() * 4)
  let random2 = Math.floor(Math.random() * 4)

  if (options.exampleRadios1 === 'on') {
    collection +=
      '身為一個工程師，' + task.engineer[random] + phrase[random2] + '吧!'

    // console.log(collection)
  } else if (options.exampleRadios2 === 'on') {
    collection +=
      '身為一個設計師，' + task.designer[random] + phrase[random2] + '吧!'
    // console.log(collection)
  } else if (options.exampleRadios3 === 'on') {
    collection +=
      '身為一個創業家，' + task.entrepreneur[random] + phrase[random2] + '吧!'
    // console.log(collection)
  } else {
    collection = '請選擇您要說幹話的對象'
  }

  return collection
}

module.exports = generateBullshit
