import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Send, ThumbsUp, Share2, Users, Clock, Gift, Volume2, Maximize2 } from "lucide-react";

const LiveStreamingPage = () => {
  const { state } = useLocation();
  const { name, topic, time, videoUrl } = state || {};
  const chatRef = useRef(null);
  const videoRef = useRef(null);
  
  // States
  const [messages, setMessages] = useState([
    { text: "Welcome to the live session! 🌟", sender: "Astrologer", timestamp: new Date() },
    { text: "I'm excited to discuss your future!", sender: "User", timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [viewerCount, setViewerCount] = useState(245);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [shareCount, setShareCount] = useState(24);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [volume, setVolume] = useState(100);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulate viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update duration timer
  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    
    // Animate like button
    const likeButton = document.getElementById('likeButton');
    likeButton.classList.add('scale-125');
    setTimeout(() => likeButton.classList.remove('scale-125'), 200);
  };

  const handleShare = () => {
    setShowShareModal(true);
    setShareCount(prev => prev + 1);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        text: newMessage,
        sender: "User",
        timestamp: new Date(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage(""); // Clear the input field
    }
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h3 className="text-xl font-bold mb-4">Share Stream</h3>
        <div className="space-y-4">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setShowShareModal(false);
            }}
            className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Copy Link
          </button>
          <div className="flex space-x-4">
            <button className="flex-1 p-3 bg-blue-500 text-white rounded-lg">Facebook</button>
            <button className="flex-1 p-3 bg-sky-500 text-white rounded-lg">Twitter</button>
            <button className="flex-1 p-3 bg-green-500 text-white rounded-lg">WhatsApp</button>
          </div>
          <button 
            onClick={() => setShowShareModal(false)}
            className="w-full p-3 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Stream Section */}
          <div className="lg:w-2/3">
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                className="w-full h-[480px] object-cover"
                autoPlay
                muted
                playsInline
              >
                <source src={videoUrl || "https://videos.pexels.com/video-files/6014230/6014230-sd_506_960_24fps.mp4"} type="video/mp4" />
              </video>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Volume2 className="w-5 h-5" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24"
                    />
                  </div>
                  <button onClick={handleFullscreen}>
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="absolute top-4 left-4 flex items-center space-x-4">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {formatDuration(duration)}
                </span>
                <span className="bg-gray-900/70 text-white px-4 py-1 rounded-full flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {viewerCount}
                </span>
              </div>
              <span className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full">
                LIVE
              </span>
            </div>
            
            <div className="mt-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{name}</h1>
                  <p className="text-gray-600">{topic}</p>
                </div>
                <div className="flex space-x-4">
                  <button 
                    id="likeButton"
                    onClick={handleLike}
                    className={`p-2 rounded-full transition-all ${
                      isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100'
                    }`}
                  >
                    <ThumbsUp className="w-6 h-6" />
                    <span className="text-sm">{likeCount}</span>
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100"
                  >
                    <Share2 className="w-6 h-6" />
                    <span className="text-sm">{shareCount}</span>
                  </button>
                  <button className="p-2 rounded-full bg-gray-100">
                    <Gift className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:w-1/3 bg-white rounded-xl shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Live Chat</h2>
            </div>
            
            <div 
              ref={chatRef}
              className="h-[400px] overflow-y-auto p-4 space-y-4"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "User" ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === "User" 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default LiveStreamingPage;