const errorMsg = (errCode) => {
  switch (errCode) {
    case 1:
      return 'Please add a link';
    case 2:
      return 'Invalid URL submitted';
    case 3:
      return 'Wait a second and try again';
    case 4:
      return `You've been blocked`;
    case 5:
      return 'Code already taken/in use';
    case 6:
      return 'Unknown error';
    case 7:
      return 'Parameter is empty';
    case 8:
      return 'There is no such short-link';
    case 9:
      return 'Missing required parameters';
    case 10:
      return 'Trying to shorten a disallowed Link';
  }
};

export default errorMsg;