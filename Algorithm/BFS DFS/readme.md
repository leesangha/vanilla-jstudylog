### DFS BFS 사용 사례 및 응용

1. 그래프의 모든 정점을 방문하는 것이 주요한 문제

   - 단순히 모든 정점을 방문하는 것이 중요한 문제인 경우 아무거나 사용가능

2. 경로의 특징을 저장해야하는 경우

   - 경로중에 예외사항이나 특징이 있는 경우 DFS 사용 (한 방향으로 끝까지 갔기 때문)

3. 미로찾기와 같이 최단거리를 찾아야하는 경우 BFS가 유리

   - 왜냐하면 깊이 우선 탐색으로 경로를 검색할 경우 처음으로 발견되는 해답이 최단거리가 아닐 수 있지만, 너비 우선 탐색으로 현재 노드에서 가까운 곳부터 찾기 때문에 경로를 탐색 시 먼저 찾아지는 해답이 곧 최단거리기 때문입니다.

4. 검색 대상 그래프가 정말 크다면 DFS를 고려
   - 검색대상의 규모가 크지 않고, 검색 시작 지점으로부터 원하는 대상이 별로 멀지 않다면 BFS
