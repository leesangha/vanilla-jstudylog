function solution(common) {
  const isExponential = () => {
    return common[1] / common[0] === common[2] / common[1];
  };

  if (isExponential()) {
    return (common.pop() * common[1]) / common[0];
  }

  return common.pop() + common[1] - common[0];
}
