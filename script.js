document.addEventListener("DOMContentLoaded", function() {
    const emotionSelect = document.getElementById("emotion");
    const emotionImage = document.getElementById("emotion-image");
    const diaryText = document.getElementById("diary-text");
    let imageSrc = "";

    emotionSelect.addEventListener("change", function() {
        const emotion = emotionSelect.value;
        //console.log(emotion);デバック機能
        if (emotion === "happy") {
            imageSrc = "./source/image/20250107_123922785_iOS.png";
        } else if (emotion === "sad") {
            imageSrc = "./source/image/20250107_123927797_iOS.png";
        } else if (emotion === "fun") {
            imageSrc = "./source/image/20250107_123945161_iOS.png";
        }

        if (imageSrc) {
            emotionImage.src = imageSrc;
            emotionImage.style.display = "inline-block";
        } else {
            emotionImage.style.display = "none";
        }
    });
});

function saveDiary() {
    const title = document.getElementById("title").value;
    const emotion = document.getElementById("emotion").value;
    const diaryText = document.getElementById("diary-text").value;
    const today = new Date().toLocaleDateString();
    const content = `日付: ${today}\nタイトル: ${title}\n今日の感情: ${emotion}\n日記:\n${diaryText}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("日記が保存されました！");
}