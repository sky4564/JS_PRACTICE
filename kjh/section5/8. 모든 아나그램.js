from collections import deque

N, M = map(int, input().split())
maze = []
for _ in range(N):
    maze.append(list(map(int, input())))
visited = [[False for a in range(M)] for b in range(N)]
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
def bfs(graph, n, m, visited, distance):
    if -1 < n < N and -1 < m < M:
        if visited[n][m] == False and graph[n][m] != 0:
            visited[n][m] = True
            graph[n][m] = distance + 1
            for i in range(4):
                bfs(graph, n + dx[i], m + dy[i], visited, graph[n][m])
                
    else:
        return
bfs(maze, 0, 0, visited, 0)
print(1)
print(maze)
print(maze[-1][-1])