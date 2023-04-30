import subprocess

command = "netsh wlan show profile"
networks = subprocess.run(command, capture_output=True, text=True)

network_list = []
for network in networks.stdout.split("\n"):
    if "All User Profile" in network:
        network_name = network.split(":")[1].strip()
        network_list.append(network_name)

for network_name in network_list:
    command = f"netsh wlan show profile {network_name} key=clear"
    try:
        password = subprocess.run(command, capture_output=True, text=True, check=True)
        if "Key Content" in password.stdout:
            print(f"{network_name}: {password.stdout.split('Key Content')[1].strip()}")
        else:
            print(f"{network_name}: Password not found")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")