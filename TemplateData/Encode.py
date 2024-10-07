import base64

def encode_with_obfuscation(url):
    obfuscation_code = "XYZ"
    encoded_with_obfuscation = ""

    for i in range(0, len(url), 3):
        encoded_with_obfuscation += url[i:i+3] + obfuscation_code

    # 將結果進行 base64 編碼
    encoded_with_obfuscation = base64.b64encode(encoded_with_obfuscation.encode()).decode()

    print("Encoded URL:", encoded_with_obfuscation)
    return encoded_with_obfuscation

# 提示使用者輸入 URL
url = input("請輸入 URL: ")
encode_with_obfuscation(url)

input("按 Enter 鍵退出...")