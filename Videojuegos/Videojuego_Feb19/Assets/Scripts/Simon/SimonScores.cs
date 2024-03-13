using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class SimonScores : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;
    [SerializeField] TMP_Text highScoreText;

    // Start is called before the first frame update
    void Start()
    {
        int score = PlayerPrefs.GetInt("score", 0);
        scoreText.text = "Score: " + score.ToString();    
        int highScore = PlayerPrefs.GetInt("highScore", 0);
        highScoreText.text = "highScore: " + highScore.ToString(); 
    }

}
