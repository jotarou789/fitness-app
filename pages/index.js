import { useEffect, useState } from 'react';

export default function FitnessApp() {
  // Vercel / Next.js にそのまま置ける単一ページ版
  // pages/index.js に貼り付けて使える形に整理済み
  const [gender, setGender] = useState('male');
  const [selectedPart, setSelectedPart] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [idealBodyPhoto, setIdealBodyPhoto] = useState('');
  const [showIdealBody, setShowIdealBody] = useState(false);
  const [records, setRecords] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [input, setInput] = useState('');
  const [memo, setMemo] = useState('');
  const [weight, setWeight] = useState('');
  const [cardioMinutes, setCardioMinutes] = useState('');
  const [cardioKm, setCardioKm] = useState('');

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
    胸: ['ベンチプレス','インクラインベンチプレス','ダンベルフライ','チェストプレス','デクラインベンチプレス','ペックフライ','ディップス','ケーブルクロスオーバー','腕立て伏せ','マシンプレス'],
    脚: ['スクワット','レッグプレス','ブルガリアンスクワット','レッグエクステンション','レッグカール','カーフレイズ','ランジ','スミススクワット','ハックスクワット'],
    背中: ['懸垂','ラットプルダウン','デッドリフト','シーテッドロー','ワンハンドロー','ベントオーバーロウ','Tバーロウ','シュラッグ','ケーブルロー'],
    肩: ['ショルダープレス','サイドレイズ','フロントレイズ','リアレイズ','アップライトロウ','アーノルドプレス'],
    二頭筋: ['アームカール','ハンマーカール','プリーチャーカール','インクラインカール','ケーブルカール'],
    三頭筋: ['プレスダウン','フレンチプレス','ディップス','ナローベンチ','キックバック'],
    お腹: ['プランク','クランチ','レッグレイズ','ロシアンツイスト','バイシクルクランチ','マウンテンクライマー'],
    お尻: ['ヒップスラスト','グルートブリッジ','ドンキーキック','ブルガリアンスクワット','ケーブルキックバック','サイドウォーク']
  };

  const saveRecord = () => {
    if (!selectedDay) return;
    setRecords({ ...records, [`${month}-${selectedDay}`]: { input, memo, weight, cardioMinutes, cardioKm } });
  };

  const chartData = Object.entries(records).filter(([,v]) => v.weight).map(([k,v]) => ({ date: k, weight: Number(v.weight) }));

  return (
    <div className="min-h-screen bg-black text-white p-4 flex justify-center">
      <div className="w-full max-w-md space-y-4 bg-zinc-900 p-4 rounded-3xl">
        <h1 className="text-2xl font-bold text-center">筋トレログ</h1>
        <div className="flex gap-2 justify-center">
          <button onClick={() => setGender('male')} className="px-3 py-2 bg-blue-600 rounded-xl">男性</button>
          <button onClick={() => setGender('female')} className="px-3 py-2 bg-pink-600 rounded-xl">女性</button>
        </div>
        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">理想の体</h2>
          <input type="file" accept="image/*" onChange={handleIdealPhotoUpload} />
          <button onClick={() => setShowIdealBody(!showIdealBody)} className="block mt-2 px-3 py-2 bg-zinc-700 rounded-xl">表示</button>
          {showIdealBody && idealBodyPhoto && <img src={idealBodyPhoto} className="mt-3 rounded-xl w-full h-auto" />}
        </div>
        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">おすすめメニュー</h2>
          <div className="flex flex-wrap gap-2">
            {recommendedParts.map(part => <button key={part} onClick={() => setSelectedPart(part)} className="px-2 py-1 bg-zinc-700 rounded-lg text-sm">{part}</button>)}
          </div>
          {selectedPart && <div className="mt-3 space-y-2">{exerciseData[selectedPart]?.map(ex => <button key={ex} onClick={() => setSelectedExercise(ex)} className="w-full text-left p-2 bg-zinc-700 rounded-lg text-sm">{ex}</button>)}</div>}
          {selectedExercise && <a className="text-blue-400 underline block mt-2" href={`https://www.youtube.com/results?search_query=${selectedExercise}`} target="_blank">動画を見る</a>}
        </div>
        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="font-bold mb-2">記録カレンダー</h2>
          <div className="flex justify-between mb-2"><button onClick={() => setMonth(Math.max(1, month-1))}>←</button><span>{month}月</span><button onClick={() => setMonth(Math.min(12, month+1))}>→</button></div>
          <div className="grid grid-cols-5 gap-1">{Array.from({length:30},(_,i)=>i+1).map(day => <button key={day} onClick={() => setSelectedDay(day)} className={`p-2 text-xs rounded ${records[`${month}-${day}`] ? 'bg-green-500':'bg-zinc-700'}`}>{day}</button>)}</div>
          {selectedDay && <div className="mt-3 space-y-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="トレ内容" className="w-full p-2 text-black rounded" />
            <textarea value={memo} onChange={e=>setMemo(e.target.value)} placeholder="メモ" className="w-full p-2 text-black rounded" />
            <input value={weight} onChange={e=>setWeight(e.target.value)} placeholder="重量kg" className="w-full p-2 text-black rounded" />
            <input value={cardioMinutes} onChange={e=>setCardioMinutes(e.target.value)} placeholder="有酸素 分" className="w-full p-2 text-black rounded" />
            <input value={cardioKm} onChange={e=>setCardioKm(e.target.value)} placeholder="有酸素 km" className="w-full p-2 text-black rounded" />
            <button onClick={saveRecord} className="w-full bg-green-600 p-2 rounded-xl">保存</button>
          </div>}
        </div>
      </div>
    </div>
  );
}
