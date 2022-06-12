using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteManagementProject.WEBAPI.ChatService
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;
        private readonly IDictionary<string, UserConnection> _connections;

        public ChatHub(IDictionary<string, UserConnection> connections)
        {
            _botUser = "MyChat Bot";
            _connections = connections;
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                _connections.Remove(Context.ConnectionId);
                Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser, $"{userConnection.Username} has left");
                SendUsersConnected(userConnection.Room);
            }

            return base.OnDisconnectedAsync(exception);
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

            _connections[Context.ConnectionId] = userConnection;

            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser, $"{userConnection.Username} has joined {userConnection.Room}");

            await SendUsersConnected(userConnection.Room);
        }

        public async Task SendMessage(string message)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", userConnection.Username, message);
            }
        }

        public Task SendUsersConnected(string room)
        {
            var users = _connections.Values
                .Where(c => c.Room == room)
                .Select(c => c.Username);

            return Clients.Group(room).SendAsync("UsersInRoom", users);
        }
    }

}
