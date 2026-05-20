import { useEffect, useState } from 'react';

export default function FitnessApp() {
  const [gender, setGender] = useState('male');
  const [selectedPart, setSelectedPart] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');
  const [idealBodyPhoto, setIdealBodyPhoto] = useState('');
  const [showIdealBody, setShowIdealBody] = useState(false);
  const [records, setRecords] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('gym-records');
    if (saved) setRecords(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('gym-records', JSON.stringify(records));
  }, [records]);

  const handleIdealPhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setIdealBodyPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const recommendedParts = gender === 'male'
    ? ['胸','脚','背中','肩','三頭筋','二頭筋']
    : ['お尻','脚','お腹','背中','肩'];

  const exerciseData = {
    胸: ['ベンチプレス','ダンベルフライ','チェストプレス'],
    脚: ['スクワット','レッグプレス','ランジ'],
    背中: ['懸垂','ラットプルダウン','デッドリフト'],
    肩: ['ショルダープレス','サイドレイズ','リアレイズ'],
    二頭筋: ['アームカール','ハンマーカール'],
    三頭筋: ['プレスダウン','ディップス'],
    お腹: ['プランク','クランチ','レッグレイズ'],
    お尻: ['ヒップスラスト','グルートブリッジ','ドンキーキック']
  };

  const saveRecord = () => {
    if (!selectedDay) return;
    setRecords({ ...records, [selectedDay]: input });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center">筋トレログ</h1>

        <div className="flex gap-2 justify-center">
          <button onClick={() => setGender('male')} className="px-3 py-2 bg-blue-600 rounded-xl">男性</button>
          <button onClick={() => setGender('female')} className="px-3 py-2 bg-pink-600 rounded-xl">女性</button>
        </div>

        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">理想の体</h2>
          <input type="file" accept="image/*" onChange={handleIdealPhotoUpload} />
          <button onClick={() => setShowIdealBody(!showIdealBody)} className="mt-2 px-3 py-2 bg-zinc-700 rounded-xl">表示</button>
          {showIdealBody && idealBodyPhoto && <img src={idealBodyPhoto} className="mt-3 rounded-xl w-full" alt="理想" />}
        </div>

        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">おすすめメニュー</h2>
          <div className="flex flex-wrap gap-2">
            {recommendedParts.map(part => (
              <button key={part} onClick={() => setSelectedPart(part)} className="px-2 py-1 bg-zinc-700 rounded-lg text-sm">{part}</button>
            ))}
          </div>
          {selectedPart && (
            <div className="mt-3 space-y-2">
              {exerciseData[selectedPart].map(ex => (
                <button key={ex} onClick={() => setSelectedExercise(ex)} className="w-full text-left p-2 bg-zinc-700 rounded-lg text-sm">{ex}</button>
              ))}
            </div>
          )}
          {selectedExercise && <p className="mt-2 text-sm text-zinc-300">選択中: {selectedExercise}</p>}
        </div>

        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">記録</h2>
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
              <button key={day} onClick={() => setSelectedDay(day)} className={`p-2 text-xs rounded ${records[day] ? 'bg-green-500' : 'bg-zinc-700'}`}>{day}</button>
            ))}
          </div>
          {selectedDay && (
            <div className="mt-3 space-y-2">
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="トレ内容" className="w-full p-2 text-black rounded" />
              <button onClick={saveRecord} className="w-full bg-green-600 p-2 rounded-xl">保存</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
