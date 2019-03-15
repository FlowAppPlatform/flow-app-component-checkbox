export const alignContainer = option => {
  switch (option) {
    case 'left':
      return {
        marginRight: 'auto'
      }
    case 'right':
      return {
        marginLeft: 'auto'
      };
    case 'center':
      return {
        margin: 'auto'
      }
  }
}

export const containerWidth = option => {
  switch (option) {
    case 'ten':
      return {
        width: '10%'
      }
    case 'fifteen':
      return {
        width: '15%'
      }
    case 'twenty':
      return {
        width: '20%'
      }
    case 'thirty':
      return {
        width: '30%'
      };
      case 'forty':
      return {
        width: '40%'
      }
    case 'fifty':
      return {
        width: '50%'
      }
    case 'sixty':
      return {
        width: '60%'
      };
      case 'seventy':
      return {
        width: '70%'
      }
    case 'eighty':
      return {
        width: '80%'
      }
    case 'ninety':
      return {
        width: '90%'
      };
    case 'full-page':
      return {
        width: '100%'
      }
  }
}

export const alignVertical = option => ({
  verticalAlign: option
})
